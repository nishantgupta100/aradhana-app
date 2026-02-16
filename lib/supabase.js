import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ueqtqydzwkatjamzcbfm.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlcXRxeWR6d2thdGphbXpjYmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMjA0MzMsImV4cCI6MjA4Njc5NjQzM30.-1FMyLRRF_mQBhEy9JqAK3CLsmKVXiEcGc7HGh_FIUE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)




