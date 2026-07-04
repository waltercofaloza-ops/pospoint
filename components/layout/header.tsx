"use client";

import { useHabitat } from "@/domain/habitatcontext";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Store, BookOpen } from "lucide-react";
import { menurubro } from "@/domain/menurubro"; // nombre consistente

export function Header() {
  const { activeView, setActiveView, setActiveModule, activeModule } = useHabitat();

  return (
    <header className="w-full border-b border-border p-4 bg-card/80 backdrop-blur-md flex items-center gap-6">
      {/* marca */}
      <div className="flex flex-col">
        <Link href="/protected" className="font-bold text-lg text-primary leading-none">BluePOS</Link>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Blueprint Lab</span>
      </div>

      <ThemeSwitcher />

      {/* selector de rubros */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="gap-2 capitalize">
            {activeModule === 'restaurantview' ? <Store className="size-4" /> : <BookOpen className="size-4" />}
            {activeModule === 'restaurantview' ? 'restaurante' : 'libreria'}
            <ChevronDown className="size-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => setActiveModule('restaurantview')}>
            <Store className="mr-2 size-4" /> restaurante
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveModule('libraryview')}>
            <BookOpen className="mr-2 size-4" /> libreria
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* menu contextual dinámico */}
      <div className="flex items-center gap-2 border-l pl-6 border-border/50">
        {menurubro[activeModule]?.map((item) => (
          <Button key={item.label} variant="ghost" size="sm" className="gap-2 text-xs capitalize">
            <item.icon className="size-3" /> {item.label}
          </Button>
        ))}
      </div>

      <div className="flex-1" />

      {/* acciones */}
      <div className="flex items-center gap-4">
        {activeView !== 'billing' && (
          <Button onClick={() => setActiveView('billing')} className="font-bold">
            VENDER
          </Button>
        )}
      </div>
    </header>
  );
}
