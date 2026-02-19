// prisma.config.ts
import { defineConfig } from "prisma/config";
import "dotenv/config"; // <--- ADD THIS LINE

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL, // Use process.env instead of the env() helper for better compatibility
  },
});