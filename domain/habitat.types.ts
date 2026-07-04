// domain/habitat.types.ts

// Definimos los módulos del ecosistema (tus tejidos)
export type ModuleType = 'bluepos' | 'real_estate' | 'education' | 'events' | 'core';

// ADN base del Habitat
export interface HabitatNode<T = Record<string, any>> {
  id: string;
  parent_id: string | null;
  owner_id: string;
  
  // "Corazón": Datos específicos de la entidad
  data: T; 
  
  // "Sistema Nervioso": Control administrativo
  metadata: {
    module: ModuleType;
    version: string;
    status: 'active' | 'archived' | 'draft';
    [key: string]: any; 
  };
  
  created_at: string;
  vector_embedding?: number[] | null;
}
