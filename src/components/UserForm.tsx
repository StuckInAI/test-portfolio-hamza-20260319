"use client"

import { useState } from 'react'

export default function UserForm({ onAddUser }: { onAddUser: (name: string, email: string) => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      alert('Please fill in all fields')
      return
    }
    setSubmitting(true)
    try {
      await onAddUser(name, email)
      setName('')
      setEmail('')
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter email"
          required
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {submitting ? 'Adding...' : 'Add User'}
      </button>
    </form>
  )
}