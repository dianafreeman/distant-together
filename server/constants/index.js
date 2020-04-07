import path from "path";
import dotenv from "dotenv";

dotenv.config();

export const TODAY = new Date().getTime();
export const ONE_DAY_AGO = TODAY - 24 * 1000 * 60 * 60;
export const SHEET_RANGE = `Clinical!1:198`;

export const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SPREADSHEET_ID}/values/${SHEET_RANGE}?key=${process.env.GOOGLE_SHEET_API_KEY}`;

export const CACHE_PATTERN = path.resolve(__dirname, "../data/cached.json");
