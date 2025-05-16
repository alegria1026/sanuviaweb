'use client'
import Menu from '@/app/components/Menu'
import dynamic from 'next/dynamic'
import Footer from '@/app/components/Footer'

// This avoids server-side rendering for the Phaser component
const Game = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
})

export default function PlayPage() {
  return (
    <main>
      <Menu />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-green-600">
            <Game />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}