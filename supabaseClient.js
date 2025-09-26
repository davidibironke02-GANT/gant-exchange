import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://djtdmqqsereqkppckjyx.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdGRtcXFzZXJlcWtwcGNranl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDM1NjUsImV4cCI6MjA3NDQ3OTU2NX0.f6Qo_xFEHep6A7ulaM9RlP_ILQXCLqdBKPuwPNfATGQ"

export const supabase = createClient(supabaseUrl, supabaseKey)
