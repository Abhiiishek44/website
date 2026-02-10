import { Sparkles, Shield, MessageSquare, Bot, ArrowRight } from "lucide-react";

export default function ChatWidgetPreview() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass golden-border mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Widget Preview</span>
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
            <div className="bg-transparent px-4 py-3 flex items-center space-x-2 border-b border-border/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-success/80"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="glass-card px-4 py-1.5 rounded-lg text-xs text-foreground/60 flex items-center">
                  <Shield className="h-3 w-3 mr-2 text-success" />
                  https://yourwebsite.com
                </div>
              </div>
            </div>

            {/* Browser Content Area with Chat Widget */}
            <div className="relative bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent p-12 h-[600px]">
              {/* Voxora Chat Button (Bottom Right) */}
              <div className="absolute bottom-6 right-6 group cursor-pointer">
                <div className="relative">
                  {/* Chat Button */}
                  <button className="bg-gradient-to-br from-primary to-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl glow-primary-strong hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                    <MessageSquare className="h-7 w-7" />
                  </button>
                  
                  {/* Notification Badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    1
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="glass-strong px-3 py-2 rounded-lg text-xs text-foreground">
                      Chat with us! 💬
                    </div>
                  </div>
                </div>

                {/* Chat Widget (Appears on hover/click) */}
                <div className="absolute bottom-20 right-0 w-96 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 origin-bottom-right pointer-events-none group-hover:pointer-events-auto">
                  <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
                    {/* Widget Header */}
                    <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Bot className="h-6 w-6 text-white" />
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
                          <Bot className="h-4 w-4 text-primary" />
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
                          <Bot className="h-4 w-4 text-primary" />
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
                          <Bot className="h-4 w-4 text-primary" />
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
                      <p className="text-[10px] text-foreground/40 mt-2 text-center flex items-center justify-center">
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
