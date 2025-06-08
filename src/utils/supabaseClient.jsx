import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para buscar todos os leads
export async function getLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*');
  if (error) throw error;
  return data;
}

// Função para buscar um lead por ID
export async function getLeadById(id) {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}