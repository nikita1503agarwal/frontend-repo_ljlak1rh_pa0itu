import { useEffect, useState } from 'react'
import { Barcode, Package, ReceiptText, User2 } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState({ products: 0, taxes: 0, sales: 0 })

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    Promise.all([
      fetch(`${baseUrl}/api/products`).then(r => r.json()).catch(() => []),
      fetch(`${baseUrl}/api/taxes`).then(r => r.json()).catch(() => []),
      fetch(`${baseUrl}/api/sales`).then(r => r.json()).catch(() => []),
    ]).then(([products, taxes, sales]) => {
      setStats({ products: products.length || 0, taxes: taxes.length || 0, sales: sales.length || 0 })
    })
  }, [])

  const Card = ({ icon: Icon, title, value, tint }) => (
    <div className={`rounded-2xl p-5 border backdrop-blur-xl bg-white/60 ${tint}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-semibold text-gray-800">{value}</p>
        </div>
        <div className="p-3 rounded-xl bg-white/80 border">
          <Icon className="text-gray-600" size={22} />
        </div>
      </div>
    </div>
  )

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card icon={Package} title="Products" value={stats.products} tint="border-indigo-200/60" />
      <Card icon={ReceiptText} title="Sales" value={stats.sales} tint="border-emerald-200/60" />
      <Card icon={Barcode} title="Tax Rates" value={stats.taxes} tint="border-purple-200/60" />
    </section>
  )
}
