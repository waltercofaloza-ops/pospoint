// domain/menurubro.ts
import { LayoutGrid, UtensilsCrossed, ClipboardList, Users, LibraryBig, LucideIcon } from "lucide-react";

export type MenuItem = {
  label: string;
  icon: LucideIcon;
  action: string;
};

export const MENU_CONFIG: Record<string, MenuItem[]> = {
  restaurantview: [
    { label: "Mesas", icon: LayoutGrid, action: "tables" },
    { label: "Comanda", icon: UtensilsCrossed, action: "orders" },
    { label: "Cocina", icon: ClipboardList, action: "kitchen" },
  ],
  libraryview: [
    { label: "Catálogo", icon: LibraryBig, action: "catalog" },
    { label: "Préstamos", icon: ClipboardList, action: "loans" },
    { label: "Socios", icon: Users, action: "members" },
  ],
};
