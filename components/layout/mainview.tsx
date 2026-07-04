"use client";

import { useHabitat } from "@/domain/habitatcontext";
import { RestaurantView } from "@/components/modules/restaurantview";
import { LibraryView } from "@/components/modules/libraryview";

// IMPORTANTE: Definimos la interfaz para aceptar children
interface MainViewProps {
  children: React.ReactNode;
}

export function MainView({ children }: MainViewProps) {
  const { activeModule } = useHabitat();

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-6">
      {/* Si hay un módulo activo, mostramos el componente correspondiente */}
      {activeModule === 'restaurant' && <RestaurantView />}
      {activeModule === 'library' && <LibraryView />}
      
      {/* Si NO hay módulo seleccionado, mostramos lo que venía en page.tsx (children) */}
      {!activeModule && children}
    </main>
  );
}
