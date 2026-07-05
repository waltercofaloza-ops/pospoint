"use client";

// Importación directa desde el sub-módulo (a veces resuelve problemas de resolución de árboles)
import { BookOpen } from "lucide-react/dist/esm/icons/book-open";
import { Bookmark } from "lucide-react/dist/esm/icons/bookmark";
import { Trash2 } from "lucide-react/dist/esm/icons/trash-2";

export function LibraryView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-950 rounded-3xl border border-blue-900/50">
      {/* Panel Principal de Contenido */}
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center justify-between border-b border-blue-900 pb-4">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-3">
            <BookOpen className="size-8" />
            Catálogo de Librería
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 bg-slate-900 rounded-2xl border border-blue-800 hover:border-blue-500 transition-all">
              <h3 className="font-bold text-lg text-white">Título del Libro {i}</h3>
              <p className="text-blue-300 text-sm">Autor Ejemplo</p>
              <button className="mt-4 w-full py-2 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-500">
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Panel Lateral de Gestión */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-blue-900 flex flex-col">
        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <Bookmark className="size-5" />
          Resumen
        </h3>
        <div className="flex-1 text-slate-400 text-center py-10 border-2 border-dashed border-blue-900 rounded-xl">
          No hay libros seleccionados
        </div>
        <button className="w-full mt-6 py-3 bg-red-900/30 text-red-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-900/50">
          <Trash2 className="size-4" />
          Limpiar Todo
        </button>
      </div>
    </div>
  );
}
