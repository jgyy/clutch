import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image
            src="/symbol.svg"
            alt="Clutch Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-yellow-400 tracking-wider">CLUTCH</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-yellow-400 transition-colors">How It Works</a>
          <a href="#markets" className="hover:text-yellow-400 transition-colors">Markets</a>
        </div>
        <button className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all font-semibold">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Predict the Future of
            <span className="text-yellow-400"> Gaming</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Trade on gaming industry outcomes with blockchain-powered prediction markets.
            From game releases to esports tournaments, make informed bets on what&apos;s next in gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all">
              Start Trading
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all">
              View Markets
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Clutch?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-600">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Gaming-Focused Markets</h3>
            <p className="text-gray-300">
              Specialized prediction markets for game releases, console launches, esports outcomes, and industry trends.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain Security</h3>
            <p className="text-gray-300">
              Transparent, secure, and decentralized trading powered by blockchain technology for maximum trust.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analytics</h3>
            <p className="text-gray-300">
              Advanced market data, trend analysis, and insights to help you make smarter trading decisions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-800/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your Market</h3>
              <p className="text-gray-300">
                Browse gaming prediction markets covering releases, tournaments, sales figures, and industry events.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Place Your Bet</h3>
              <p className="text-gray-300">
                Buy shares in outcomes you believe will happen. Share prices reflect the market&apos;s confidence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Win & Earn</h3>
              <p className="text-gray-300">
                When events resolve, winning shares pay out. Trade anytime or hold until resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Examples */}
      <section id="markets" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Sample Markets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-600">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Will GTA 6 release in 2025?</h3>
              <span className="text-yellow-400 font-bold">73%</span>
            </div>
            <p className="text-gray-300 mb-4">Market closes: Dec 31, 2025</p>
            <div className="flex gap-4">
              <button className="flex-1 bg-yellow-400 text-slate-900 py-2 px-4 rounded-lg font-semibold">Yes $0.73</button>
              <button className="flex-1 bg-slate-600 text-white py-2 px-4 rounded-lg">No $0.27</button>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-600">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Which team wins The International 2025?</h3>
              <span className="text-yellow-400 font-bold">Multiple</span>
            </div>
            <p className="text-gray-300 mb-4">Market closes: Oct 15, 2025</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Team Liquid</span>
                <span className="text-yellow-400 font-semibold">$0.24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">OG</span>
                <span className="text-yellow-400 font-semibold">$0.18</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Partner with Clutch?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Join us in revolutionizing gaming predictions. We&apos;re seeking strategic partners
            to shape the future of blockchain-powered gaming markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all">
              Schedule Partnership Call
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-900 hover:text-yellow-400 transition-all">
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/symbol.svg"
                alt="Clutch Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-yellow-400 tracking-wider">CLUTCH</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Clutch. All rights reserved. Built for the gaming prediction revolution.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
