import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export const farmaService = {
  async buscarProducto(termino: string) {
    if (!termino) return [];
    
    const term = termino.toLowerCase();
    
    const { data, error } = await supabase
      .from('habitat')
      .select('id, data')
      .or(
        `data->>nombre.ilike.%${term}%,` +
        `data->identificadores->>troquel.eq.${term},` +
        `data->identificadores->>codigo_barras.eq.${term}`
      )
      .limit(10);
      
    if (error) {
      console.error("Error en búsqueda:", error);
      return [];
    }
    
    return data || [];
  }
};
