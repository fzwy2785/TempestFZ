#!/usr/bin/env node
import { runReport } from "./report.js";
import fs from "fs";
import { loadData, saveData } from "./storage.js";

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

  } else if (cmd === "export") {
    const format = args[0] || "csv";
    if (records.length === 0) {
      console.log("没有记录可导出 🎉");
      return;
    }

    if (format === "csv") {
      const header = "date,category,amount\n";
      const rows = records.map(r => `${r.date},${r.category},${r.amount}`).join("\n");
      const csv = header + rows;

      fs.writeFileSync("records.csv", csv);
      console.log("✅ 已导出 records.csv");

    } else {
      console.log("❌ 目前只支持 csv 格式");
    }

  } else if (cmd === "import") {
    const format = args[0] || "csv";
    if (format !== "csv") {
      console.log("❌ 目前只支持 csv 格式");
      return;
    }

    if (!fs.existsSync("records.csv")) {
      console.log("❌ 没有找到 records.csv");
      return;
    }

    const raw = fs.readFileSync("records.csv", "utf-8").trim();
    const lines = raw.split("\n").slice(1); // 跳过表头

    const newRecords = lines.map(line => {
      const [date, category, amountStr] = line.split(",");
      return {
        date,
        category,
        amount: parseFloat(amountStr)
      };
    });

    records = records.concat(newRecords);
    saveData(records);

    console.log(`✅ 已导入 ${newRecords.length} 条记录`);

   } else if (cmd === "report") {
    const mode = args[0] || "all";
    runReport(records, mode);


  } else {
    console.log("Usage: node index.js <add|list|delete|report|export|import>");
  }
}

main();
