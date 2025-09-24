import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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

      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl"></div>
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Predict the Future of
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Gaming</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Trade on gaming industry outcomes with blockchain-powered prediction markets.
            From game releases to esports tournaments, make informed bets on what&apos;s next in gaming.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 px-6 py-3 rounded-full">
              <span className="text-purple-200 text-sm font-semibold">🎮 Game Releases</span>
            </div>
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-400/30 px-6 py-3 rounded-full">
              <span className="text-red-200 text-sm font-semibold">⚔️ Esports Events</span>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full">
              <span className="text-green-200 text-sm font-semibold">💰 Sales Predictions</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full">
              <span className="text-blue-200 text-sm font-semibold">🏆 Industry Awards</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 shadow-lg">
              Start Trading
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-105">
              View Markets
            </button>
          </div>
        </div>
      </section>

      <section id="markets" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Trending Markets
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-2xl border border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">GTA</span>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Will GTA 6 release in 2025?</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-sm">Market closes: Dec 31, 2025</span>
                <span className="text-green-400 font-bold text-2xl">73%</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">Yes $0.73</button>
              <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">No $0.27</button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-orange-900 p-6 rounded-2xl border border-red-500/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">DOTA</span>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xs">TI</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The International 2025 Winner</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-sm">Market closes: Oct 15, 2025</span>
                <span className="text-orange-400 font-bold">Multiple</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-black/20 p-2 rounded">
                <span className="text-white font-semibold">Team Liquid</span>
                <span className="text-yellow-400 font-bold">$0.24</span>
              </div>
              <div className="flex justify-between items-center bg-black/20 p-2 rounded">
                <span className="text-white font-semibold">OG</span>
                <span className="text-yellow-400 font-bold">$0.18</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 p-6 rounded-2xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">PS5</span>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xs">PRO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PS5 Pro sales exceed 5M in Q1?</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-sm">Market closes: Mar 31, 2025</span>
                <span className="text-cyan-400 font-bold text-2xl">41%</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">Yes $0.41</button>
              <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-semibold transition-all">No $0.59</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Popular Gaming Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">AAA</span>
              </div>
              <span className="text-white text-sm font-semibold">Game Releases</span>
              <div className="text-green-200 text-xs mt-1">24 markets</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚔️</span>
              </div>
              <span className="text-white text-sm font-semibold">Esports</span>
              <div className="text-purple-200 text-xs mt-1">18 markets</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎮</span>
              </div>
              <span className="text-white text-sm font-semibold">Console Wars</span>
              <div className="text-blue-200 text-xs mt-1">12 markets</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">💰</span>
              </div>
              <span className="text-white text-sm font-semibold">Sales Figures</span>
              <div className="text-orange-200 text-xs mt-1">15 markets</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-rose-600 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">📱</span>
              </div>
              <span className="text-white text-sm font-semibold">Mobile Gaming</span>
              <div className="text-pink-200 text-xs mt-1">21 markets</div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🔥</span>
              </div>
              <span className="text-white text-sm font-semibold">Indie Hits</span>
              <div className="text-teal-200 text-xs mt-1">9 markets</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <span className="text-white text-sm font-semibold">Streaming</span>
              <div className="text-indigo-200 text-xs mt-1">8 markets</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <span className="text-white text-sm font-semibold">Tech Trends</span>
              <div className="text-yellow-200 text-xs mt-1">11 markets</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Clutch?
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 p-12 rounded-2xl border border-slate-600">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-6">The World&apos;s First Gaming-Focused Prediction Market</h3>
                <div className="text-lg text-gray-300 space-y-4">
                  <p>
                    While traditional prediction markets focus on politics and economics, Clutch is purpose-built for the $200+ billion gaming industry. Our platform harnesses the collective intelligence of gamers, industry professionals, and analysts to create the most accurate predictions about gaming outcomes, from AAA release dates to esports tournament results.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">150+</div>
                      <div className="text-sm text-gray-400">Gaming Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">$50M+</div>
                      <div className="text-sm text-gray-400">Total Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">99.2%</div>
                      <div className="text-sm text-gray-400">Prediction Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-20">
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

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Featured Games
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Discover prediction markets for your favorite games across all genres and platforms
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {[
            'Albion Online', 'Always On', 'Among Us', 'Animals, Aquariums, and Zoos', 'Anime Squad', 'Apex Legends',
            'Arena Breakout_ Infinite', 'Art', 'ASMR', 'BATTLEFIELD 6', 'Black Desert', 'Brawl Stars',
            'Call of Duty_ Black Ops 6', 'Call of Duty', 'Call of Duty_ Warzone', 'Chess', 'Clair Obscur_ Expedition 33',
            'Clash Royale', 'Counter-Strike', 'Crypto', 'Dark and Darker', 'DayZ', 'Dead by Daylight', 'Deadlock',
            'Delta Force', 'Destiny 2', 'Diablo IV', 'DJs', 'Dota 2', 'Dune_ Awakening', 'EA Sports FC 25',
            'ELDEN RING', 'ELDEN RING NIGHTREIGN', 'Escape from Tarkov', 'FINAL FANTASY XIV ONLINE', 'Fortnite',
            'Games + Demos', 'Genshin Impact', 'GeoGuessr', 'Grand Theft Auto V', 'Hearthstone',
            'Heroes of Might and Magic III_ The Restoration of Erathia', 'Honkai_ Star Rail', 'Hunt_ Showdown 1896',
            'I', 'IRL', 'Just Chatting', 'Kingdom Come_ Deliverance II', 'Kings League', 'La Velada',
            'League of Legends', 'Lost Ark', 'Magic_ The Gathering', 'Mario Kart World', 'Marvel Rivals',
            'Minecraft', 'Mobile Legends_ Bang Bang', 'Monster Hunter Wilds', 'Music', 'NBA 2K25',
            'Old School RuneScape', 'Overwatch 2', 'Path of Exile 2', 'Path of Exile', 'PEAK', 'Phasmophobia',
            'Pokémon Scarlet_Violet', 'Poker', 'Project Zomboid', 'PUBG_ BATTLEGROUNDS', 'Red Dead Redemption II',
            'R.E.P.O.', 'Retro', 'ROBLOX', 'Rocket League', 'Rust', 'Schedule I', 'Sea of Thieves',
            'Silent Hill 2', 'Slots', 'Special Events', 'Sports', 'Star Citizen', 'Streamer University',
            'Street Fighter 6', 'Talk Shows & Podcasts', 'Teamfight Tactics', 'TEKKEN 8',
            'The Elder Scrolls IV_ Oblivion Remastered', 'Throne and Liberty', 'Tibia', 'Tom Clancy',
            'VALORANT', 'Virtual Casino', 'VRChat', 'Warcraft III', 'Warframe', 'World of Tanks',
            'World of Warcraft', 'Wuthering Waves'
          ].map((game, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-600 hover:border-yellow-400/50">
              <div className="aspect-square relative">
                <Image
                  src={`/downloaded_images/${game}.jpg`}
                  alt={game}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-sm font-semibold truncate">{game.replace(/_/g, ': ')}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-yellow-400 text-xs">Markets available</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 shadow-lg">
            View All Game Markets
          </button>
        </div>
      </section>

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
