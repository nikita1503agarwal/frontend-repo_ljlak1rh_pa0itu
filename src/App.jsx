import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ProductList from './components/ProductList'

function App() {
  const [message, setMessage] = useState('')
  const [seeding, setSeeding] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSeed = async () => {
    try {
      setSeeding(true)
      const res = await fetch(`${baseUrl}/api/seed`, { method: 'POST' })
      const data = await res.json()
      setMessage(`Demo data ready: ${data.products} products, ${data.users} user(s)`) 
      setTimeout(() => setMessage(''), 5000)
      // Trigger a soft reload of stats by updating state; components fetch on mount
    } catch (e) {
      setMessage('Failed to seed demo data')
    } finally {
      setSeeding(false)
    }
  }

  const handleTest = async () => {
    try {
      const res = await fetch(`${baseUrl}/test`)
      const data = await res.json()
      setMessage(data.database || 'Backend OK')
      setTimeout(() => setMessage(''), 4000)
    } catch {
      setMessage('Cannot reach backend')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header onSeed={handleSeed} seeding={seeding} onTest={handleTest} />

        {message && (
          <div className="rounded-xl p-3 border bg-white/70 text-sm text-gray-700">
            {message}
          </div>
        )}

        <Dashboard />
        <ProductList />
      </div>
    </div>
  )
}

export default App
