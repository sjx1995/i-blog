/*
 * @Description: 创建一篇新的文章
 * @Author: Sunly
 * @Date: 2023-09-13 06:26:54
 */
import input from "@inquirer/input";
import dayjs from "dayjs";
import { writeFileSync } from "fs";
import { resolve } from "path";

const getFilePath = (filename: string) => {
  return resolve(process.cwd(), "content", "posts", `${filename}.md`);
};

const createTemplate = (title: string, desc: string, tags: string) => {
  const time = dayjs().format("YYYY-MM-DD HH:mm");
  return (
    `---\n` +
    `title: ${title.trim()}\n` +
    `description: ${desc.trim()}\n` +
    `tag: ${tags.trim()}\n` +
    `dateTime: ${time}\n` +
    `---\n`
  );
};

(async () => {
  const filename = await input({
    message: "💾 文件名",
    validate: (val) => (val.trim() === "" ? "文件名不能为空" : true),
  });
  const title = await input({
    message: "📃 文章标题",
    validate: (val) => (val.trim() === "" ? "标题不能为空" : true),
  });
  const description = await input({
    message: "💭 文章描述",
    validate: (val) => (val.trim() === "" ? "描述不能为空" : true),
  });
  const tags = await input({
    message: "🏷 标签（多个使用空格隔开）",
  });

  writeFileSync(
    getFilePath(filename),
    createTemplate(title, description, tags),
    { encoding: "utf-8" }
  );

  console.log(`✅ ${filename}.md 创建成功`);
})();
