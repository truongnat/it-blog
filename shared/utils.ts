import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { appLocale } from "~/shared/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("vi-VN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const getLocaleName = (locale?: string) => {
  return locale === appLocale.EN ? 'En': 'Vi'
}
