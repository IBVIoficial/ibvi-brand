import React from 'react';

const ColorTestPage = () => {
  const ibviColors = [
    { name: 'ibvi-teal', value: '#28515A' },
    { name: 'ibvi-gold', value: '#F3BA57' },
    { name: 'ibvi-charcoal', value: '#1C1C1C' },
    { name: 'ibvi-cream', value: '#FEF9EC' },
    { name: 'ibvi-navy', value: '#0E1316' },
  ];

  return (
    <div className="min-h-screen bg-ibvi-cream p-8">
      <h1 className="text-3xl font-bold mb-8 text-ibvi-navy">IBVI Color Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ibviColors.map((color) => (
          <div 
            key={color.name}
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ${color.name === 'ibvi-cream' ? 'border border-ibvi-charcoal' : ''}`}
            style={{ backgroundColor: color.value }}
          >
            <div className="text-center mb-2">
              <p className={`font-bold ${color.name === 'ibvi-cream' ? 'text-ibvi-charcoal' : 'text-white'}`}>
                {color.name}
              </p>
              <p className={`text-sm ${color.name === 'ibvi-cream' ? 'text-ibvi-charcoal' : 'text-white'}`}>
                {color.value}
              </p>
            </div>
            <div className="flex space-x-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${color.name === 'ibvi-cream' ? 'bg-ibvi-charcoal text-ibvi-cream' : 'bg-white text-ibvi-charcoal'}`}>
                Text
              </span>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${color.name === 'ibvi-cream' ? 'border border-ibvi-charcoal text-ibvi-charcoal' : 'border border-white text-white'}`}>
                Border
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-ibvi-navy">Teste de Classes Tailwind</h2>
        <div className="space-y-4">
          <div className="p-4 bg-ibvi-teal text-ibvi-cream rounded">
            bg-ibvi-teal + text-ibvi-cream
          </div>
          <div className="p-4 bg-ibvi-gold text-ibvi-navy rounded">
            bg-ibvi-gold + text-ibvi-navy
          </div>
          <div className="p-4 border-2 border-ibvi-charcoal text-ibvi-charcoal rounded">
            border-ibvi-charcoal
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTestPage;
