#!/usr/bin/env node
import fs from "fs";

const DATA_FILE = "./data.json";

// 读取数据
function loadData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

// 保存数据
function saveData(records) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
}

const [,, cmd, ...args] = process.argv;

function main() {
  let records = loadData();

  if (cmd === "add") {
    const amount = parseFloat(args[0]);
    const category = args[1] || "未分类";
    const date = new Date().toISOString().split("T")[0];

    if (isNaN(amount)) {
      console.log("❌ 金额必须是数字");
      return;
    }

    const record = { amount, category, date };
    records.push(record);
    saveData(records);
    console.log(`✅ 已添加: ${amount} (${category}) at ${date}`);

  } else if (cmd === "list") {
    if (records.length === 0) {
      console.log("没有记录 🎉");
    } else {
      let total = 0;
      records.forEach((r, i) => {
        total += r.amount;
        console.log(`${i}. ${r.date} | ${r.category} | ${r.amount}`);
      });
      console.log(`---\n总余额: ${total}`);
    }

  } else if (cmd === "delete") {
    const index = parseInt(args[0]);
    if (!records[index]) {
      console.log("❌ 没有这个编号");
    } else {
      const removed = records.splice(index, 1);
      saveData(records);
      console.log("🗑 已删除:", removed[0].category, removed[0].amount);
    }

  } else {
    console.log("Usage: node index.js <add|list|delete>");
  }
    } else if (cmd === "report") {
    if (records.length === 0) {
      console.log("没有记录 🎉");
    } else {
      const summary = {};
      let total = 0;

      records.forEach(r => {
        total += r.amount;
        summary[r.category] = (summary[r.category] || 0) + r.amount;
      });

      console.lo
      Object.entries(summary).forEach(([cat, sum]) => {
        console.log(`${cat}: ${sum}`);
      });

      console.log(`---\n总余额: ${total}`);

  } else {
    console.log("Usage: node index.js <add|list|delete|report>");
  }
}

main();