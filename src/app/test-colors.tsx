export default function TestColors() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Teste de Cores IBVI</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Classes Tailwind</h3>
          <div className="space-y-4">
            <div>
              <div className="w-full h-16 rounded-lg bg-ibvi-teal"></div>
              <p className="mt-1 text-sm">bg-ibvi-teal</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg bg-ibvi-gold"></div>
              <p className="mt-1 text-sm">bg-ibvi-gold</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg bg-ibvi-charcoal"></div>
              <p className="mt-1 text-sm">bg-ibvi-charcoal</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg bg-ibvi-cream border border-gray-300"></div>
              <p className="mt-1 text-sm">bg-ibvi-cream</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg bg-ibvi-navy"></div>
              <p className="mt-1 text-sm">bg-ibvi-navy</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">CSS Inline</h3>
          <div className="space-y-4">
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: 'hsl(191deg 38% 25%)'}}></div>
              <p className="mt-1 text-sm">hsl(191deg 38% 25%)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: 'hsl(39deg 87% 65%)'}}></div>
              <p className="mt-1 text-sm">hsl(39deg 87% 65%)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: 'hsl(0deg 0% 11%)'}}></div>
              <p className="mt-1 text-sm">hsl(0deg 0% 11%)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: 'hsl(43deg 90% 96%)'}}></div>
              <p className="mt-1 text-sm">hsl(43deg 90% 96%)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: 'hsl(203deg 22% 7%)'}}></div>
              <p className="mt-1 text-sm">hsl(203deg 22% 7%)</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Hex Values</h3>
          <div className="space-y-4">
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: '#28515A'}}></div>
              <p className="mt-1 text-sm">#28515A (Teal)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: '#F3BA57'}}></div>
              <p className="mt-1 text-sm">#F3BA57 (Gold)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: '#1C1C1C'}}></div>
              <p className="mt-1 text-sm">#1C1C1C (Charcoal)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: '#FEF9EC'}}></div>
              <p className="mt-1 text-sm">#FEF9EC (Cream)</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-lg" style={{backgroundColor: '#0E1316'}}></div>
              <p className="mt-1 text-sm">#0E1316 (Navy)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
