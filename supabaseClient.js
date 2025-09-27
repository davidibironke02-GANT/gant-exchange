import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Your Supabase project details
const SUPABASE_URL = "https://djtdmqqsereqkppckjyx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdGRtcXFzZXJlcWtwcGNranl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDM1NjUsImV4cCI6MjA3NDQ3OTU2NX0.f6Qo_xFEHep6A7ulaM9RlP_ILQXCLqdBKPuwPNfATGQ";

// Create a single Supabase client for your whole app
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
