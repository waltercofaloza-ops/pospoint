"use client";

import { useHabitat } from "@/domain/habitatcontext";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
// Asegúrate de importar el componente que maneja la sesión (ajusta la ruta según lo que tengas)
import { UserButton } from "@/components/user-button"; 

export function Header() {
  const { activeView, setActiveView, setActiveModule } = useHabitat();

  return (
    <header className="w-full border-b border-border p-4 bg-card/80 backdrop-blur-md flex justify-between items-center">
      {/* Marca */}
      <div className="flex flex-col">
        <Link href="/protected" className="font-bold text-lg text-primary leading-none">BluePOS</Link>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Blueprint Lab</span>
      </div>

      {/* Selector de Rubros */}
      <div className="flex gap-2">
        <button 
          onClick={() => setActiveModule('restaurantview')} 
          className="px-3 py-1 bg-secondary rounded text-xs hover:bg-secondary/80 transition-colors"
        >
          Restaurante
        </button>
        <button 
          onClick={() => setActiveModule('libraryview')} 
          className="px-3 py-1 bg-secondary rounded text-xs hover:bg-secondary/80 transition-colors"
        >
          Librería
        </button>
      </div>

      {/* Acciones (Vender, Sesión y Tema) */}
      <div className="flex items-center gap-4">
        {activeView !== 'billing' && (
          <button 
            onClick={() => setActiveView('billing')}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
          >
            VENDER
          </button>
        )}
        <ThemeSwitcher />
        <UserButton /> {/* Aquí debería estar el componente de tu sesión que eliminé por error */}
      </div>
    </header>
  );
}
