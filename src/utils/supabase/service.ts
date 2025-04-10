import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";

const SUPABASE_PUBLIC_KEY = process.env.SUPABASE_SERVICE_KEY!
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!


const client = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

const createServiceClient = () => {
  return client
};

export default createServiceClient;

