import { describe, it, expect, beforeEach } from "vitest";
import fs from "fs";
import { execSync } from "child_process";

const DATA_FILE = "./data.json";

function runCLI(args) {
  return execSync(`node index.js ${args}`, { encoding: "utf-8" });
}

describe("记账 CLI", () => {
  beforeEach(() => {
    fs.writeFileSync(DATA_FILE, "[]"); // 每次测试前清空数据
  });

  it("可以添加记录", () => {
    const output = runCLI("add -50 食物");
    expect(output).toContain("✅ 已添加");
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    expect(data.length).toBe(1);
    expect(data[0].category).toBe("食物");
  });

  it("可以列出记录并计算总余额", () => {
    runCLI("add -50 食物");
    runCLI("add 100 工资");
    const output = runCLI("list");
    expect(output).toContain("总余额: 50");
  });
});
