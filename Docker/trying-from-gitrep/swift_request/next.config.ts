import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 1. The fix from your Stack Overflow link
  turbopack: {
    root: path.join(__dirname), 
  },

  // 2. Keep this to prevent the "Prisma Client" panic
  serverExternalPackages: ['@prisma/client', 'pg', 'bcryptjs','zod'],
};

export default nextConfig;