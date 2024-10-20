 import z from "zod";

 export const signUpInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name: z.string().optional()
 })

 export const signinInput= z.object({
    email:z.string().email(),
    password:z.string().min(6),
 })

export const createPostInput = z.object({
    title:z.string(),
    content:z.string()
})
 
export const updatePost = z.object({
    title:z.string(),
    content:z.string(),
    id: z.any()
})

export type CreatePostInput = z.infer<typeof createPostInput>

 export type SignUpInput = z.infer<typeof signUpInput>

 export type SigninInput = z.infer<typeof signinInput>

 export type UpdatePost = z.infer<typeof updatePost>