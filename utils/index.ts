/*
 * @Description: 工具函数
 * @Author: Sunly
 * @Date: 2023-09-10 16:21:53
 */
const getRandom = (n: number, start: number = 0): number => {
  return Math.random() * n + start;
};

export { getRandom };
