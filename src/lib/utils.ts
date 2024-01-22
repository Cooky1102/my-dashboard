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

/*
 * @param {number} bytes
 * @returns {string}
 * @description
 * Converts bytes into human readable file size.
 * */
export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
