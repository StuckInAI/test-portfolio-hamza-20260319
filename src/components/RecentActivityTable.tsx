"use client"

import { useState, useEffect } from 'react'

const activities = [
  { user: 'John Doe', action: 'Logged in', timestamp: '2024-01-15 10:30 AM' },
  { user: 'Jane Smith', action: 'Updated profile', timestamp: '2024-01-15 11:15 AM' },
  { user: 'Bob Johnson', action: 'Created report', timestamp: '2024-01-14 02:45 PM' },
  { user: 'Alice Brown', action: 'Deleted user', timestamp: '2024-01-14 09:20 AM' },
]

export default function RecentActivityTable() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => setLoading(false), 500)
  }, [])

  if (loading) return <div>Loading activities...</div>

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {activities.map((activity, index) => (
            <tr key={index}>
              <td className="px-4 py-3 text-sm text-gray-900">{activity.user}</td>
              <td className="px-4 py-3 text-sm text-gray-900">{activity.action}</td>
              <td className="px-4 py-3 text-sm text-gray-900">{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}