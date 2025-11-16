import z from "zod";
//         backend will need
//             Signup
export const signupInput = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().optional()
});
//             Signin
export const signinInput = z.object({
    email: z.email(),
    password: z.string().min(8)
});
//           create blog/post
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});
//           updateBLogInput
export const updateBlogInput = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string()
});
