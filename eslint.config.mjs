import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Original rule
      "react/no-unescaped-entities": "off",

      // Performance and best practices
      "react/jsx-no-bind": ["error", { allowArrowFunctions: true }], // Prevent function creation in render
      "react/no-array-index-key": "warn", // Warn about using array indices as keys
      "react/jsx-key": "error", // Ensure keys are used in iterators

      // Accessibility
      "jsx-a11y/alt-text": "error", // Ensure alt text for images
      "jsx-a11y/anchor-is-valid": "error", // Ensure anchors are valid

      // Code quality
      "no-console": "warn", // Warn about console statements
      "prefer-const": "error", // Prefer const over let when possible
      "no-var": "error", // Disallow var
      eqeqeq: ["error", "always"], // Require === and !==

      // NextJS specific
      "react/jsx-uses-react": "off", // Not needed in Next.js with React 17+
      "react/react-in-jsx-scope": "off", // Not needed in Next.js

      // TypeScript specific (without touching unused vars)
      "@typescript-eslint/no-explicit-any": "warn", // Discourage use of any
      "@typescript-eslint/explicit-module-boundary-types": "off", // Allow return type inference
      "@typescript-eslint/no-non-null-assertion": "warn", // Warn about non-null assertions
    },
  },
];

export default eslintConfig;
