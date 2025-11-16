// src/index.ts
import { z } from "zod";
var signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional()
});
var signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
var createBlogInput = z.object({
  title: z.string(),
  content: z.string()
});
var updateBlogInput = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string()
});
export {
  createBlogInput,
  signinInput,
  signupInput,
  updateBlogInput
};
