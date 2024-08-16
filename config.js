import { configDotenv } from "dotenv";

configDotenv()

const config =  {
    PORT: process.env.PORT,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_DATABASE_URL: process.env.SUPABASE_DATABASE_URL
}

export default config;
