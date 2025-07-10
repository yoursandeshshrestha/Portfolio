// Function to truncate text to specified number of characters
export const truncateText = (text: string, maxChars: number = 105) => {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + "...";
};
