// report.js
export function runReport(records, mode = "all") {
  if (records.length === 0) {
    console.log("没有记录 🎉");
    return;
  }

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const month = today.slice(0, 7); // YYYY-MM

  let filtered = records;
  if (mode === "today") {
    filtered = records.filter(r => r.date === today);
  } else if (mode === "month") {
    filtered = records.filter(r => r.date.startsWith(month));
  }

  if (filtered.length === 0) {
    console.log(`没有符合条件的记录 (${mode}) 🎉`);
    return;
  }

  const summary = {};
  let total = 0;

  filtered.forEach(r => {
    total += r.amount;
    summary[r.category] = (summary[r.category] || 0) + r.amount;
  });

  console.log(`📊 分类统计 (${mode}):`);
  Object.entries(summary).forEach(([cat, sum]) => {
    console.log(`${cat}: ${sum}`);
  });

  console.log(`---\n总余额: ${total}`);
}
