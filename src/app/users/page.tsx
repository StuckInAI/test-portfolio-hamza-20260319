"use client"

import { useEffect, useState } from 'react'
import UserTable from '@/components/UserTable'
import UserForm from '@/components/UserForm'
import { User } from '@/entities/User'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (name: string, email: string) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      if (!response.ok) throw new Error('Failed to add user')
      fetchUsers() // Refresh the list
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users Management</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserTable users={users} />
    </div>
  )
}