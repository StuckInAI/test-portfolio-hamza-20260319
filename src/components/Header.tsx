export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="px-6 py-4">
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
          <a href="/dashboard" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</a>
          <a href="/users" className="text-gray-700 hover:text-gray-900 font-medium">Users</a>
          <a href="/settings" className="text-gray-700 hover:text-gray-900 font-medium">Settings</a>
        </nav>
      </div>
    </header>
  )
}