import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string) {
  // 将字符串按空格分割成数组
  const nameArray = fullName.split(" ");

  // 提取每个单词的首字母并连接起来
  const initials = nameArray.map((word) => word.charAt(0)).join("");

  // 将结果转换为大写并返回
  return initials.toUpperCase();
}
