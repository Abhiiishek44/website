import { Sparkles, Shield, MessageSquare, Bot, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ChatWidgetPreview() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass green-border mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">Widget Preview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Embeddable <span className="gradient-text">Chat Widget</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Lightweight and powerful. Embed in any website with a single line of code.
          </p>
        </div>
        
        {/* Browser Window Frame */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl" />
          <div className="relative bg-transparent border border-border/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser Chrome */}
            <div className="bg-black px-4 py-3 flex items-center space-x-2 border-b border-border/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-success/80"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800 px-4 py-1.5 rounded-lg text-xs text-gray-300 flex items-center">
                  <Shield className="h-3 w-3 mr-2 text-success" />
                  https://docs.voxora.cloud
                </div>
              </div>
            </div>

            {/* Browser Content Area with Chat Widget */}
            <div className="relative bg-white h-[600px] overflow-hidden">
              {/* Simulated Documentation Site */}
              <div className="w-full h-full bg-white overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">V</span>
                      </div>
                      <h1 className="text-xl font-semibold text-gray-900">Voxora Documentation</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 text-sm bg-emerald-500 text-white rounded-md">Get Started</button>
                    </div>
                  </div>
                </div>

                {/* Sidebar and Content */}
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-hidden">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</div>
                      <a href="#" className="block px-2 py-1 text-sm text-emerald-600 bg-emerald-50 rounded">Quick Start</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Installation</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Configuration</a>
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4">API Reference</div>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Authentication</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Chat API</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Webhooks</a>
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4">Deployment</div>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Docker</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">AWS</a>
                      <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">Railway</a>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6 overflow-hidden">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
                      <p className="text-gray-600 mb-6">Get up and running with Voxora in under 5 minutes.</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-green-400">
                          <div>npm install @voxora/chat-widget</div>
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-700">
                        <h3 className="font-semibold text-gray-900">Basic Implementation</h3>
                        <p>Add the Voxora chat widget to your website with just a few lines of code:</p>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <pre className="text-sm overflow-hidden">
{`<script src="https://cdn.voxora.cloud/widget.js"></script>
<script>
  VoxoraChat.init({
    apiKey: 'your-api-key',
    theme: 'emerald'
  });
</script>`}
                          </pre>
                        </div>

                        <h3 className="font-semibold text-gray-900 mt-6">Configuration Options</h3>
                        <p>Customize the appearance and behavior:</p>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 text-sm">Theme Colors</h4>
                            <p className="text-gray-600 text-xs mt-1">Customize primary and accent colors</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 text-sm">Position</h4>
                            <p className="text-gray-600 text-xs mt-1">Bottom-right, bottom-left, etc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Voxora Chat Button (Bottom Right) */}
              <div className="absolute bottom-6 right-6 group cursor-pointer z-10">
                <div className="relative">
                  {/* Chat Button */}
                  <button className="bg-gradient-to-br from-primary to-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl glow-primary-strong hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                    <Image 
                      src="/logo1.png"
                      alt="Voxora"
                      width={40}
                      height={40}
                      className="w-13 h-13 object-contain"
                    />
                  </button>
                  
                  {/* Notification Badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    1
                  </div>

                  {/* Tooltip */}
                 
                </div>

                {/* Chat Widget (Appears on hover/click) */}
                <div className="absolute bottom-20 right-0 w-96 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 origin-bottom-right pointer-events-none group-hover:pointer-events-auto">
                  <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
                    {/* Widget Header */}
                    <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Image 
                            src="/logo1.png"
                            alt="Voxora"
                            width={40}
                            height={40}
                      className="w-10 h-10 object-contain"
                    />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Voxora Support</h3>
                          <p className="text-white/80 text-xs flex items-center">
                            <span className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse"></span>
                            Online
                          </p>
                        </div>
                      </div>
                      <button className="text-white/80 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-3 h-80 overflow-y-auto bg-background/50">
                      {/* Bot Message */}
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Image 
                           src="/logo1.png"
                           alt="Voxora"
                           width={32}
                           height={32}
                           className="w-7 h-7 object-contain"/>
                        </div>
                        <div className="glass-card p-3 rounded-2xl rounded-tl-sm max-w-[70%]">
                          <p className="text-sm text-foreground">Hi! 👋 Welcome to Voxora. How can I help you today?</p>
                          <span className="text-[10px] text-foreground/40 mt-1 block">Just now</span>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-primary p-3 rounded-2xl rounded-tr-sm max-w-[70%]">
                          <p className="text-sm text-primary-foreground">I need help with integration</p>
                          <span className="text-[10px] text-primary-foreground/60 mt-1 block">Just now</span>
                        </div>
                      </div>

                      {/* Bot Message with options */}
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Image 
                           src="/logo1.png"
                           alt="Voxora"
                           width={32}
                           height={32}
                           className="w-7 h-7 object-contain"/>
                        </div>
                        <div className="glass-card p-3 rounded-2xl rounded-tl-sm max-w-[70%]">
                          <p className="text-sm text-foreground mb-2">I&apos;d be happy to help! What would you like to integrate?</p>
                          <div className="space-y-2 mt-2">
                            <button className="w-full text-left px-3 py-2 rounded-lg glass text-xs text-foreground/80 hover:bg-primary/10 transition-colors">
                              📱 Mobile App
                            </button>
                            <button className="w-full text-left px-3 py-2 rounded-lg glass text-xs text-foreground/80 hover:bg-primary/10 transition-colors">
                              🌐 Website
                            </button>
                            <button className="w-full text-left px-3 py-2 rounded-lg glass text-xs text-foreground/80 hover:bg-primary/10 transition-colors">
                              🔌 API
                            </button>
                          </div>
                          <span className="text-[10px] text-foreground/40 mt-2 block">Just now</span>
                        </div>
                      </div>

                      {/* Typing Indicator */}
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Image 
                           src="/logo1.png"
                           alt="Voxora"
                           width={32}
                           height={32}
                           className="w-7 h-7 object-contain"/>
                        </div>
                        <div className="glass-card p-3 rounded-2xl rounded-tl-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 glass-strong border-t border-border/50">
                      <div className="flex items-center space-x-2">
                        <button className="text-foreground/60 hover:text-primary transition-colors p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </button>
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 bg-background/50 text-foreground placeholder:text-foreground/40 px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button className="bg-primary text-primary-foreground p-2 rounded-xl hover:bg-primary/90 transition-colors">
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-white mt-2 text-center flex items-center justify-center">
                        Powered by 
                        <span className="ml-1 font-semibold gradient-text">Voxora</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
