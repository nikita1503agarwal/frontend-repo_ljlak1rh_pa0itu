import { useEffect, useState } from 'react'

export default function ProductList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      try {
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <div className="rounded-2xl p-5 border backdrop-blur-xl bg-white/60">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Products</h3>
        <span className="text-sm text-gray-500">{items.length} items</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map(p => (
          <div key={p._id} className="rounded-xl border bg-white/70 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{p.name}</p>
                <p className="text-xs text-gray-500">SKU: {p.sku}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{Number(p.price).toFixed(3)} DT</p>
                <p className="text-xs text-gray-500">Stock: {p.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
