import { google } from "googleapis";
import { readFileSync } from "fs";

const keyFile = readFileSync(
  process.cwd() + "/blognextjs-407311-f66c0675c91e.json"
);
const credentials = JSON.parse(keyFile);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

export default auth;
