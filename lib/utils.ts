export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function isPending(value: string): boolean {
  return value === "pending" || value.toLowerCase().includes("pending verification");
}
