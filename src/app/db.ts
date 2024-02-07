import sqlite3 from "sqlite3";

export class Database extends sqlite3.Database {}

const db = new Database(import.meta.env.DB_PATH);

export default db;
