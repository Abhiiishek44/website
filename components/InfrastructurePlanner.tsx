"use client";

import { useState } from "react";

type CloudProvider = 'aws' | 'gcp' | 'hostinger' | 'railway' | 'on-premise';

export default function InfrastructurePlanner() {
  const [peakUsers, setPeakUsers] = useState(1000);
  const [sessionDuration, setSessionDuration] = useState(15);
  const [messagesPerMinute, setMessagesPerMinute] = useState(5);
  const [trafficType, setTrafficType] = useState<'text' | 'audio'>('text');
  const [audioBitrate, setAudioBitrate] = useState<'low' | 'medium' | 'high'>('medium');
  const [retentionDays, setRetentionDays] = useState(30);
  const [haMode, setHaMode] = useState<'single' | 'auto' | 'multi'>('auto');
  const [cloudProvider, setCloudProvider] = useState<CloudProvider>('aws');
  const [region, setRegion] = useState('us-east-1');
  const [gpuMode, setGpuMode] = useState<'off' | 'shared' | 'dedicated'>('off');

  const cloudProviders = [
    { id: 'aws' as const, name: 'AWS' },
    { id: 'gcp' as const, name: 'GCP' },
    { id: 'hostinger' as const, name: 'Hostinger' },
    { id: 'railway' as const, name: 'Railway' },
    { id: 'on-premise' as const, name: 'On-Premise' }
  ];

  const getRegionOptions = () => {
    switch (cloudProvider) {
      case 'aws':
        return [
          { value: 'us-east-1', label: 'us-east-1 (N. Virginia)' },
          { value: 'us-west-2', label: 'us-west-2 (Oregon)' },
          { value: 'eu-west-1', label: 'eu-west-1 (Ireland)' },
          { value: 'ap-southeast-1', label: 'ap-southeast-1 (Singapore)' }
        ];
      case 'gcp':
        return [
          { value: 'us-central1', label: 'us-central1 (Iowa)' },
          { value: 'us-west1', label: 'us-west1 (Oregon)' },
          { value: 'europe-west1', label: 'europe-west1 (Belgium)' },
          { value: 'asia-southeast1', label: 'asia-southeast1 (Singapore)' }
        ];
      case 'hostinger':
        return [
          { value: 'us-east', label: 'US East' },
          { value: 'europe', label: 'Europe' },
          { value: 'asia', label: 'Asia' }
        ];
      case 'railway':
        return [
          { value: 'us-west', label: 'US West' },
          { value: 'us-east', label: 'US East' },
          { value: 'europe', label: 'Europe' }
        ];
      case 'on-premise':
        return [
          { value: 'datacenter-1', label: 'Data Center 1' },
          { value: 'datacenter-2', label: 'Data Center 2' }
        ];
      default:
        return [];
    }
  };

  // Cost calculation logic for self-hosted Docker services
  const calculateCosts = () => {
    // Base compute costs per provider
    const providerMultipliers = {
      'aws': 1.0,
      'gcp': 0.9,
      'hostinger': 0.6,
      'railway': 1.2,
      'on-premise': 0.4 // Hardware depreciation + power
    };

    const multiplier = providerMultipliers[cloudProvider];
    
    // Self-hosted services (Docker containers)
    const baseComputePerUser = 0.03; // Lower cost for self-hosted
    const monthlyMessages = peakUsers * messagesPerMinute * sessionDuration * 30;
    
    // VM/Instance costs (all services run on these)
    const baseCompute = Math.max(20, peakUsers * baseComputePerUser);
    const haMultiplier = haMode === 'single' ? 1 : haMode === 'auto' ? 2 : 3;
    const computeWithHA = baseCompute * haMultiplier * multiplier;
    
    // Bandwidth costs (provider dependent)
    const bandwidthPerMessage = trafficType === 'audio' ? 0.015 : 0.003;
    const bandwidthCost = Math.max(5, monthlyMessages * bandwidthPerMessage * multiplier);
    
    // Storage costs (local disk/SSD for Docker volumes)
    const storageGb = Math.max(10, (monthlyMessages * 0.5) / 1024);
    const storageCostPerGb = cloudProvider === 'on-premise' ? 0.05 : 0.08;
    const storageCost = storageGb * storageCostPerGb * multiplier;
    
    // Backup costs
    const backupCost = cloudProvider === 'on-premise' ? 10 : storageGb * 0.02 * multiplier;
    
    // GPU costs (if enabled)
    const gpuCost = gpuMode === 'off' ? 0 : 
                   gpuMode === 'shared' ? 100 * multiplier : 
                   400 * multiplier;

    // Load balancer (Nginx/HAProxy container or cloud LB)
    const loadBalancerCost = haMode === 'single' ? 0 : 
                           cloudProvider === 'on-premise' ? 0 :
                           haMode === 'auto' ? 15 * multiplier : 
                           50 * multiplier;

    return {
      compute: Math.round(computeWithHA + gpuCost),
      bandwidth: Math.round(bandwidthCost),
      storage: Math.round(storageCost),
      backup: Math.round(backupCost),
      loadBalancer: Math.round(loadBalancerCost),
      total: Math.round(computeWithHA + bandwidthCost + storageCost + backupCost + loadBalancerCost + gpuCost)
    };
  };

  const costs = calculateCosts();

  const getInfraLayout = () => {
    const appInstances = haMode === 'single' ? 1 : haMode === 'auto' ? Math.ceil(peakUsers / 500) : Math.ceil(peakUsers / 300);
    
    return {
      app: appInstances,
      database: 1, // PostgreSQL container
      redis: 1, // Redis container
      nginx: haMode !== 'single' ? 1 : 0, // Load balancer container
      monitoring: 1, // Prometheus/Grafana containers
      gpu: gpuMode !== 'off' ? (gpuMode === 'shared' ? 1 : 2) : 0
    };
  };

  const layout = getInfraLayout();

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-mono text-foreground mb-2">Infrastructure Cost Planner</h2>
          <div className="h-px bg-border"></div>
        </div>

        {/* Cloud Provider Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-card border border-border rounded-lg p-1">
            {cloudProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => {
                  setCloudProvider(provider.id);
                  setRegion(getRegionOptions()[0]?.value || '');
                }}
                className={`px-4 py-2 text-sm font-mono rounded transition-colors ${
                  cloudProvider === provider.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-background'
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Inputs */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-mono text-foreground/80 mb-4 uppercase tracking-wider">Configuration</h3>
              
              <div className="space-y-6">
                {/* Peak Users */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Peak Concurrent Users</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={peakUsers}
                      onChange={(e) => setPeakUsers(Number(e.target.value))}
                      className="w-24 px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                      min="1"
                      max="100000"
                    />
                    <input
                      type="range"
                      value={peakUsers}
                      onChange={(e) => setPeakUsers(Number(e.target.value))}
                      min="1"
                      max="10000"
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Session Duration */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Avg Session Duration (minutes)</label>
                  <input
                    type="number"
                    value={sessionDuration}
                    onChange={(e) => setSessionDuration(Number(e.target.value))}
                    className="w-24 px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                    min="1"
                    max="480"
                  />
                </div>

                {/* Messages Per Minute */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Messages Per User Per Minute</label>
                  <input
                    type="number"
                    value={messagesPerMinute}
                    onChange={(e) => setMessagesPerMinute(Number(e.target.value))}
                    className="w-24 px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                    min="1"
                    max="50"
                  />
                </div>

                {/* Traffic Type */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Traffic Type</label>
                  <div className="flex space-x-4">
                    {(['text', 'audio'] as const).map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={trafficType === type}
                          onChange={() => setTrafficType(type)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-mono text-foreground">
                          {type === 'text' ? 'Text Only' : 'Text + Audio'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Audio Bitrate */}
                {trafficType === 'audio' && (
                  <div>
                    <label className="block text-sm font-mono text-foreground mb-2">Audio Bitrate</label>
                    <select
                      value={audioBitrate}
                      onChange={(e) => setAudioBitrate(e.target.value as 'low' | 'medium' | 'high')}
                      className="px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                    >
                      <option value="low">Low (64kbps)</option>
                      <option value="medium">Medium (128kbps)</option>
                      <option value="high">High (256kbps)</option>
                    </select>
                  </div>
                )}

                {/* Retention Days */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Retention Days</label>
                  <input
                    type="number"
                    value={retentionDays}
                    onChange={(e) => setRetentionDays(Number(e.target.value))}
                    className="w-24 px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                    min="1"
                    max="365"
                  />
                </div>

                {/* High Availability */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">High Availability</label>
                  <select
                    value={haMode}
                    onChange={(e) => setHaMode(e.target.value as 'single' | 'auto' | 'multi')}
                    className="px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="single">Single Instance</option>
                    <option value="auto">Auto-Scaling</option>
                    <option value="multi">Multi-Zone</option>
                  </select>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="px-3 py-2 bg-background border border-border text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                  >
                    {getRegionOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* GPU Mode */}
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">GPU Mode</label>
                  <div className="flex space-x-4">
                    {(['off', 'shared', 'dedicated'] as const).map((mode) => (
                      <label key={mode} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={gpuMode === mode}
                          onChange={() => setGpuMode(mode)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-mono text-foreground capitalize">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-6">
            {/* Cost Summary */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-mono text-foreground/80 mb-4 uppercase tracking-wider">Estimated Monthly Cost</h3>
              <div className="text-4xl font-mono font-bold text-foreground mb-6">
                ${costs.total.toLocaleString()}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-foreground/70">Compute (VM/Instances)</span>
                  <span className="text-foreground">${costs.compute}</span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-foreground/70">Bandwidth</span>
                  <span className="text-foreground">${costs.bandwidth}</span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-foreground/70">Storage (SSD/Disk)</span>
                  <span className="text-foreground">${costs.storage}</span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-foreground/70">Backup</span>
                  <span className="text-foreground">${costs.backup}</span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-foreground/70">Load Balancer</span>
                  <span className="text-foreground">${costs.loadBalancer}</span>
                </div>
                <div className="h-px bg-border my-2"></div>
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${costs.total}</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Layout */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-mono text-foreground/80 mb-4 uppercase tracking-wider">Docker Compose Services</h3>
              
              <div className="space-y-3 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-foreground/70">App Containers</span>
                  <span className="text-foreground">{layout.app}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">PostgreSQL</span>
                  <span className="text-foreground">{layout.database}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Redis</span>
                  <span className="text-foreground">{layout.redis}</span>
                </div>
                {layout.nginx > 0 && (
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Nginx/HAProxy</span>
                    <span className="text-foreground">{layout.nginx}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-foreground/70">Monitoring Stack</span>
                  <span className="text-foreground">{layout.monitoring}</span>
                </div>
                {layout.gpu > 0 && (
                  <div className="flex justify-between">
                    <span className="text-foreground/70">GPU Containers</span>
                    <span className="text-foreground">{layout.gpu}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-mono text-foreground/80 mb-4 uppercase tracking-wider">Technical Specifications</h3>
              
              <div className="space-y-2 text-xs font-mono text-foreground/60">
                <div>Provider: {cloudProvider.toUpperCase()}</div>
                <div>Region: {region}</div>
                <div>Peak Load: {peakUsers.toLocaleString()} users</div>
                <div>Msg Rate: {(peakUsers * messagesPerMinute).toLocaleString()}/min</div>
                <div>Storage: ~{Math.round(peakUsers * sessionDuration * messagesPerMinute * retentionDays / 1000)}GB</div>
                <div>HA Mode: {haMode}</div>
                <div>Deployment: Docker Compose</div>
                <div>Database: PostgreSQL (self-hosted)</div>
                <div>Cache: Redis (self-hosted)</div>
                {gpuMode !== 'off' && <div>GPU: {gpuMode}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}