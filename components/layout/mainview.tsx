"use client";

import { useHabitat } from "@/domain/habitatcontext";
import { RestaurantView } from "@/components/modules/restaurantview";
import { LibraryView } from "@/components/modules/libraryview";

interface MainViewProps {
  children: React.ReactNode;
}

export function MainView({ children }: MainViewProps) {
  const { activeModule } = useHabitat();

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-6">
      {/* Usamos los identificadores que coinciden con el Header */}
      {activeModule === 'restaurantview' && <RestaurantView />}
      {activeModule === 'libraryview' && <LibraryView />}
      
      {/* Si NO hay módulo seleccionado, mostramos el contenido original */}
      {!activeModule && children}
    </main>
  );
}
