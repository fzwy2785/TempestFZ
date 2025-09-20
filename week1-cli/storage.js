import fs from "fs";

const DATA_FILE = "./data.json";

export function loadData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

export function saveData(records) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
}
