import { Globe, Store, Settings, Printer } from 'lucide-react'

export default function Header({ onSeed, seeding, onTest }) {
  return (
    <header className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-2xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-inner" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Keystone POS</h1>
          <p className="text-xs text-gray-500">Offline-first Point of Sale</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onTest} className="px-3 py-2 text-sm rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 text-gray-700 flex items-center gap-2 transition-colors">
          <Store size={16} /> Test Backend
        </button>
        <button onClick={onSeed} disabled={seeding} className="px-3 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow disabled:opacity-60 disabled:cursor-not-allowed">
          {seeding ? 'Seeding…' : 'Load Demo Data'}
        </button>
        <button className="px-3 py-2 text-sm rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 text-gray-700 flex items-center gap-2">
          <Globe size={16} /> EN
        </button>
        <button className="px-3 py-2 text-sm rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 text-gray-700">
          <Settings size={16} />
        </button>
      </div>
    </header>
  )
}
