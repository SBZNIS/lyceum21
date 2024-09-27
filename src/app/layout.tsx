import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lyceum №21',
  description: 'Educational institution website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}>
        {/* Header Section */}
        <header className="bg-blue-900 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href='/' className="flex items-center space-x-4">
                <img src="/images/logo.png" alt="Lyceum Logo" className="h-12 w-12" />
                <div>
                  <h1 className="text-2xl font-extrabold">Профессиональный лицей №21</h1>
                  <p className="text-sm italic">А.Балтагулова атындагы №21 кесиптик лицей</p>
                </div>
              </a>
            </div>
          </div>
        </header>

        {/* Navigation Section */}
        <nav className="bg-blue-800 text-white shadow-md py-3">
          <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center space-x-1 sm:space-x-4">
              <li>
                <a href='/' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Главная</a>
              </li>
              <li>
                <a href='#about' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">О лицее</a>
              </li>
              <li>
                <a href='#team' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Команда</a>
              </li>
              <li>
                <a href='#news' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Новости</a>
              </li>
              <li>
                <a href='#services' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Услуги</a>
              </li>
              <li>
                <a href='#contacts' className="block px-4 py-2 hover:bg-blue-600 transition duration-200 rounded">Контакты</a>
              </li>
              
              
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        
        {children}

        {/* Footer Section */}
        <footer className="bg-blue-900 text-white p-6" id='contacts'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:px-10 gap-8">
            {/* Контакты */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul>
                <li className='hover:underline'><a href='tel:+996999060286'>+996999060286</a></li>
                <li className='hover:underline'><a href='tel:+996704057111'>+996704057111</a></li>
                <li className='hover:underline'><a href='tel:+996374160021'>+996374160021</a></li>
              </ul>
            </div>

            {/* Адрес */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Адрес</h4>
              <p className='hover:underline'><a href='https://maps.google.com/maps?q=41.3864426%2C71.5944932&z=17&hl=ru' target='_blank'>Кыргызская Республика,<br/>Жалал-Абадская область,<br/>Ала-Букинский район, село Ак-Коргон,<br/>ул. А. Каюмова, 91</a></p>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Мы в социальных сетях</h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.instagram.com/proflitsey21?igsh=MWY2dGJ3OGFzYTJlYQ" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/F9vpuuTHDGzZyL5y/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@proflitsey_21?_t=8onfFpV4kNN&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/tiktok.png" alt="TikTok" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+_2WFjX-bcMczYTNi" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/telegram.png" alt="Telegram" className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
