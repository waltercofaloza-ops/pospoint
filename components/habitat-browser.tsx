"use client";

import { useEffect, useState } from "react";
import { habitatService } from "@/domain/habitat.service";
import { HabitatNode } from "@/domain/habitat.types";

export function HabitatBrowser() {
  const [nodes, setNodes] = useState<HabitatNode[]>([]);

  useEffect(() => {
    // Por ahora traemos los nodos sin padre para listar el Core y los Módulos
    async function loadData() {
      const data = await habitatService.getChildren(null as any); // Ajustar según tu implementación
      setNodes(data);
    }
    loadData();
  }, []);

  return (
    <div className="space-y-2">
      {nodes.map((node) => (
        <div key={node.id} className="p-2 border border-white/10 rounded-lg hover:bg-primary/5 cursor-pointer">
          {node.data?.name || "Sin nombre"}
        </div>
      ))}
    </div>
  );
}
