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
  const time = dayjs();
  return (
    `---\n` +
    `title: ${title.trim()}\n` +
    `description: ${desc.trim()}\n` +
    `tag: ${tags.trim()}\n` +
    `dateTime: ${time.toISOString()}\n` +
    `sitemap:\n` +
    `  lastmod: ${time.toISOString()}\n` +
    `  updatePeriod: monthly\n` +
    `head:\n` +
    `  meta:\n` +
    `    - name: 'keywords'\n` +
    `      content: '${tags.trim()}'\n` +
    `    - name: 'author'\n` +
    `      content: 'sunly(https://github.com/sjx1995)'\n` +
    `    - name: 'copyright'\n` +
    `      content: '© ${time.year} Sunly'\n` +
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
