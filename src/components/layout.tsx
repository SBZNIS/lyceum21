'use client'

import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-blue-50`}>
        <header className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=50&width=50" alt="Lyceum Logo" className="h-12 w-12" />
              <h1 className="text-2xl font-bold">Lyceum Name</h1>
            </div>
          </div>
        </header>

        <nav className="bg-blue-800 text-white">
          <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center space-x-1 sm:space-x-4">
              {['Home', 'About the Lyceum', 'Team', 'News', 'Services', 'Contacts'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-3 py-2 hover:bg-blue-700 transition duration-150 ease-in-out">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        <footer className="bg-blue-900 text-white p-4">
          <div className="container mx-auto text-center">
            <p>Contact Lyceum Name</p>
            <p>123 Education Street, City, Country</p>
            <p>Phone: +1 234 567 8900 | Email: info@lyceum.edu</p>
          </div>
        </footer>
      </body>
    </html>
  )
}