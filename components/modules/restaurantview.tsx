"use client";

export function RestaurantView() {
  return (
    <div className="p-6 bg-slate-950 rounded-3xl border border-orange-900/50 space-y-6">
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-3 border-b border-orange-900 pb-4">
        <div className="flex items-center gap-3">
          {/* SVG de Utensilios (Restaurante) */}
          <svg className="w-9 h-9 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M15 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M9 2v20"/><path d="M15 4v18"/><path d="M8 22H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4"/><path d="M20 22h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4"/>
          </svg>
          <h2 className="text-3xl font-bold text-orange-400">Gestión de Salón</h2>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 text-sm font-medium">Ver Reservas</button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-500 font-semibold text-sm">Nueva Comanda</button>
        </div>
      </div>

      {/* Área de Mesas (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Ejemplo de Mesa 1 (Ocupada) */}
        <div className="p-5 bg-slate-900 rounded-2xl border-2 border-red-500/50 shadow-lg relative">
            <span className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800">OCUPADA</span>
            <div className="flex items-center gap-3 mb-3">
                <svg className="w-7 h-7 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <h3 className="text-xl font-bold text-white">Mesa 1</h3>
            </div>
            <p className="text-slate-300 text-sm mb-1">Clientes: 4</p>
            <p className="text-orange-300 text-sm font-medium mb-4">Total: $45.500</p>
            <div className="flex gap-2">
                <button className="flex-1 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700 text-slate-200">Detalle</button>
                <button className="flex-1 py-2 bg-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-500 text-white">Cobrar</button>
            </div>
        </div>

        {/* Ejemplo de Mesa 2 (Libre) */}
        <div className="p-5 bg-slate-900 rounded-2xl border border-green-500/50 opacity-60 hover:opacity-100 transition">
            <div className="flex items-center gap-3 mb-3">
                <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <h3 className="text-xl font-bold text-white">Mesa 2</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">Estado: Libre</p>
            <button className="w-full py-2 bg-green-600 rounded-lg text-sm font-semibold hover:bg-green-500 text-white">Habilitar</button>
        </div>
        
        {/* Mesa 3, 4... (Más elementos) */}
         <div className="p-5 bg-slate-900 rounded-2xl border border-green-500/50 opacity-60 hover:opacity-100 transition">
            <div className="flex items-center gap-3 mb-3">
                <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
                <h3 className="text-xl font-bold text-white">Mesa 3</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">Estado: Libre</p>
            <button className="w-full py-2 bg-green-600 rounded-lg text-sm font-semibold hover:bg-green-500 text-white">Habilitar</button>
        </div>
         <div className="p-5 bg-slate-900 rounded-2xl border border-orange-500/50">
            <div className="flex items-center gap-3 mb-3">
                <svg className="w-7 h-7 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
                <h3 className="text-xl font-bold text-white">Mesa 4</h3>
            </div>
            <p className="text-slate-300 text-sm mb-1">En Espera</p>
            <p className="text-slate-500 text-sm mb-4">Tiempo: 15min</p>
            <button className="w-full py-2 bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-600 text-white">Asignar</button>
        </div>
      </div>

      {/* Área de Comandas Activas (Ejemplo Inferior) */}
      <div className="p-5 bg-slate-900 rounded-2xl border border-orange-900">
        <h4 className="text-lg font-bold text-orange-300 mb-3">Últimas Comandas en Cocina</h4>
        <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded-lg border border-orange-900/50">
                <span className="text-white font-medium">Comanda #1042 (Mesa 5)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">En Preparación</span>
            </div>
             <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded-lg border border-orange-900/50">
                <span className="text-white font-medium">Comanda #1041 (Mesa 1)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-green-950 text-green-300 border border-green-800">Listo para Servir</span>
            </div>
        </div>
      </div>
    </div>
  );
}
