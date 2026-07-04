// domain/habitat.service.ts
import { createClient } from '../lib/supabase/client';
import { HabitatNode } from './habitat.types';

const supabase = createClient();

export const habitatService = {
  // Traer nodo por ID
  async getNodeById(id: string): Promise<HabitatNode | null> {
    const { data, error } = await supabase
      .from('habitat')
      .select('*')
      .eq('id', id)
      .single();
    
    return data;
  },

  // Traer hijos de un nodo (la esencia de la recursividad)
  async getChildren(parentId: string): Promise<HabitatNode[]> {
    const { data, error } = await supabase
      .from('habitat')
      .select('*')
      .eq('parent_id', parentId);
    
    return data || [];
  }
};
