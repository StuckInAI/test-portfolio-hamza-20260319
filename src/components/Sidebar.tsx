export default function Sidebar() {
  const menuItems = [
    { name: 'Overview', href: '/' },
    { name: 'Users', href: '/users' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Reports', href: '/reports' },
  ]

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block px-6 py-3 hover:bg-gray-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}