import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Footer() {
  const links = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Demo', href: '#waitlist' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ]

  return (
    <footer className="bg-black pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <Link href="/">
              {/* Force white variant by wrapping or applying class */}
              <div className="text-white grayscale brightness-200 contrast-100">
                <Logo className="h-8 w-auto opacity-90" />
              </div>
            </Link>
            <p className="text-gray-400">Georgia, online.</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm leading-6 text-gray-500 hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-16 border-t border-white/[0.06] pt-8 flex items-center justify-center">
          <p className="text-xs leading-5 text-gray-600">
            &copy; 2026 Verital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
