import { Metadata } from 'next'
import Link from 'next/link'
import DemoSection from '@/components/DemoSection'

export const metadata: Metadata = {
  title: 'Verital — Live Demo',
  description: 'Experience the Verital platform in action.',
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <header className="px-6 py-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#F97316] transition">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>
      
      <div className="py-12 md:py-24">
        <DemoSection />
      </div>
    </main>
  )
}
