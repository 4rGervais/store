import {neon} from '@neondatabase/serverless'
import dotenv from "dotenv"

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env


// creating a connection using env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
)
// the sql function exported allows us to write a sql queries safely