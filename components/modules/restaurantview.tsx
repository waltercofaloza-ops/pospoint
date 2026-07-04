import { LayoutGrid, Users, Clock, UtensilsCrossed } from "lucide-react";

export function Restaurantview() {
  const tables = [
    { id: 1, number: 1, capacity: 4, status: "ocupada", time: "45 min" },
    { id: 2, number: 2, capacity: 2, status: "libre", time: null },
    { id: 3, number: 3, capacity: 6, status: "reservada", time: "21:00" },
    { id: 4, number: 4, capacity: 4, status: "ocupada", time: "12 min" },
    { id: 5, number: 5, capacity: 2, status: "libre", time: null },
    { id: 6, number: 6, capacity: 8, status: "ocupada", time: "1 hr 10 min" },
    { id: 7, number: 7, capacity: 4, status: "libre", time: null },
     { id: 8, number: 8, capacity: 4, status: "sucia", time: null },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ocupada": return "border-red-500 bg-red-950 text-red-300";
      case "libre": return "border-emerald-500 bg-emerald-950 text-emerald-300";
      case "reservada": return "border-blue-500 bg-blue-950 text-blue-300";
      case "sucia": return "border-slate-500 bg-slate-800 text-slate-300";
      default: return "border-border bg-card";
    }
  };

  return (
    <div className="p-6 bg-orange-950/10 border border-orange-500/20 rounded-3xl h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
            <UtensilsCrossed className="size-7" />
            Módulo Restaurante - Salón Principal
        </h2>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-secondary text-foreground rounded-lg">Ver Comandas</button>
            <button className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700">Asignar Mesa</button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tables.map(table => (
          <button 
            key={table.id} 
            className={`relative flex flex-col items-center justify-center p-6 rounded-3xl border-4 aspect-square transition hover:scale-105 hover:shadow-xl ${getStatusColor(table.status)}`}
          >
            <LayoutGrid className="size-8 opacity-60" strokeWidth={1.5}/>
            <span className="text-5xl font-extrabold mt-2">{table.number}</span>
            <div className="flex items-center gap-1.5 mt-3 text-sm font-medium">
              <Users className="size-4" />
              <span>Capacidad: {table.capacity}</span>
            </div>

            {/* Indicador de estado */}
            {table.status === 'ocupada' && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">
                    <Clock className="size-3"/>
                    {table.time}
                </div>
            )}
             {table.status === 'reservada' && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                    <Clock className="size-3"/>
                     Res: {table.time}
                </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
