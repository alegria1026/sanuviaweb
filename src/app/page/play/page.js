'use client'
import dynamic from 'next/dynamic'

// This avoids server-side rendering for the Phaser component
const Game = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
})

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-green-600">
          <Game />
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Instrucciones de Juego</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-green-800 mb-2">Cómo jugar:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Selecciona el paquete de semillas y haz clic en la tierra para plantar.</li>
                <li>Usa la regadera para mantener tus plantas hidratadas.</li>
                <li>Riega regularmente hasta que la planta dé frutos.</li>
                <li>¡Cosecha tus plantas cuando estén listas!</li>
              </ol>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-green-800 mb-2">Consejos:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Presta atención al indicador de agua para no dejar que las plantas se sequen.</li>
                <li>Cada día recibirás nuevas semillas (hasta un máximo de 10).</li>
                <li>Cada planta cosechada te dará 2 frutas.</li>
                <li>Si una planta se marchita, perderás la oportunidad de cosechar sus frutos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}