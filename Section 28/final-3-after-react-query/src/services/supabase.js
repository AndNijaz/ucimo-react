import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ajktfuwbpfbracoatynh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqa3RmdXdicGZicmFjb2F0eW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNzQzNTksImV4cCI6MjA0NTk1MDM1OX0.Iw5w-HbT6sx586V2ff7jpCMe_CJAeEddthga1FPBic4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
