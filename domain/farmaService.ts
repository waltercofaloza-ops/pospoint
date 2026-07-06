// services/farmaService.ts
export const farmaService = {
  async buscarProducto(termino: string) {
    if (!termino) return [];
    
    // Convertimos a minúsculas para comparar mejor
    const term = termino.toLowerCase();
    
    // Usamos .or para buscar en los 3 campos simultáneamente
    const { data, error } = await supabase
      .from('habitat')
      .select('id, data')
      .or(
        `data->>nombre.ilike.%${term}%,` +
        `data->identificadores->>troquel.eq.${term},` +
        `data->identificadores->>codigo_barras.eq.${term}`
      )
      .limit(10);
      
    if (error) console.error("Error en búsqueda:", error);
    return data || [];
  }
};
