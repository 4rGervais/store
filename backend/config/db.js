import {neon} from '@neondatabase/serverless'
import dotenv from "dotenv"

dotenv.config()
const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env


// creating a connection using env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)
// the sql function exported allows us to write a sql queries safely

// postgresql://neondb_owner:npg_CgiOnk0cUY4l@ep-dry-shape-a45lioe4-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require