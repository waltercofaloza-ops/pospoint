"use client";

export function LibraryView() {
  return (
    <div className="space-y-6">
      {/* --- HEADER & SEARCH --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">
          <div className="p-3 bg-indigo-500/10 rounded-2xl">
            <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-white">Gestión de Biblioteca</h2>
            <div className="mt-2 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Buscar por título, autor o ISBN..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 bg-indigo-600 rounded-3xl shadow-lg shadow-indigo-500/10 relative overflow-hidden group cursor-pointer">
          <div className="relative z-10">
            <p className="text-indigo-100 text-sm font-medium">Nuevo Registro</p>
            <h3 className="text-white text-xl font-bold">Agregar Libro</h3>
          </div>
          <svg className="absolute right-[-10px] bottom-[-10px] w-24 h-24 text-indigo-500/30 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
      </div>

      {/* --- BENTO GRID CONTENT --- */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Lado Izquierdo: Catálogo (Toma 3 columnas) */}
        <div className="xl:col-span-3 space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-200">Inventario Reciente</h3>
              <div className="flex gap-2">
                <span className="text-xs px-3 py-1 bg-slate-800 text-indigo-400 rounded-full border border-indigo-500/20 font-medium">Todo</span>
                <span className="text-xs px-3 py-1 bg-slate-950 text-slate-500 rounded-full hover:text-indigo-400 cursor-pointer">Disponibles</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Libro 1 */}
              <div className="group p-4 bg-slate-950 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className="flex gap-4">
                  <div className="w-20 h-28 bg-indigo-950/30 rounded-lg border border-indigo-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-900">DISPONIBLE</span>
                      <p className="text-slate-500 text-xs">#ISBN-4021</p>
                    </div>
                    <h4 className="text-white font-bold mt-2 group-hover:text-indigo-400 transition-colors">Cien años de soledad</h4>
                    <p className="text-slate-400 text-xs">Gabriel García Márquez</p>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 py-1.5 bg-indigo-600/10 text-indigo-400 text-[11px] font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">PRESTAR</button>
                      <button className="p-1.5 bg-slate-800 rounded-lg text-slate-400 hover:text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Libro 2 */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl opacity-80">
                <div className="flex gap-4">
                  <div className="w-20 h-28 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-900">EN PRÉSTAMO</span>
                      <p className="text-slate-500 text-xs">#ISBN-8821</p>
                    </div>
                    <h4 className="text-white font-bold mt-2">Sapiens: De animales a dioses</h4>
                    <p className="text-slate-400 text-xs">Yuval Noah Harari</p>
                    <div className="mt-4 flex items-center justify-between">
                       <p className="text-[10px] text-orange-300">Vence en 2 días</p>
                       <button className="py-1.5 px-3 bg-slate-800 text-slate-300 text-[11px] font-bold rounded-lg hover:bg-indigo-600 transition-colors">DEVOLVER</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Stats & Quick Actions */}
        <div className="xl:col-span-1 space-y-6">
          {/* Mini Stats */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Resumen General</h3>
            
            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="text-xs text-slate-300">Préstamos Activos</span>
              </div>
              <span className="text-lg font-bold text-white">24</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <span className="text-xs text-slate-300">Vencidos</span>
              </div>
              <span className="text-lg font-bold text-white">03</span>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
             <h3 className="text-sm font-bold text-slate-500 mb-4">Mantenimiento</h3>
             <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-slate-950 rounded-xl text-xs text-slate-300 border border-slate-800 hover:border-indigo-500 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Exportar Inventario
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-slate-950 rounded-xl text-xs text-slate-300 border border-slate-800 hover:border-indigo-500 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Gestionar Lectores
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
