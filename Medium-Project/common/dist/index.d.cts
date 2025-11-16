import { z } from 'zod';

declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
declare const updateBlogInput: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
type SignupInput = z.infer<typeof signupInput>;
type SigninInput = z.infer<typeof signinInput>;
type CreateBlogInput = z.infer<typeof createBlogInput>;
type UpdateBlogInput = z.infer<typeof updateBlogInput>;

export { type CreateBlogInput, type SigninInput, type SignupInput, type UpdateBlogInput, createBlogInput, signinInput, signupInput, updateBlogInput };
