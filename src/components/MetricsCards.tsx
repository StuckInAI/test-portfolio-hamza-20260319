"use client"

import { useState, useEffect } from 'react'

const metrics = [
  { title: 'Total Users', value: '1,254', change: '+12%' },
  { title: 'Revenue', value: '$24,580', change: '+8%' },
  { title: 'Active Sessions', value: '3,142', change: '+5%' },
  { title: 'Growth', value: '42%', change: '+10%' },
]

export default function MetricsCards() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => setLoading(false), 500)
  }, [])

  if (loading) return <div>Loading metrics...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">{metric.title}</h3>
          <p className="text-3xl font-bold mt-2">{metric.value}</p>
          <p className="text-green-500 mt-2">{metric.change} from last month</p>
        </div>
      ))}
    </div>
  )
}