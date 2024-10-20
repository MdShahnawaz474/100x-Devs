import z from "zod";
export declare const signUpInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createPostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updatePost: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id?: any;
}, {
    title: string;
    content: string;
    id?: any;
}>;
export type CreatePostInput = z.infer<typeof createPostInput>;
export type SignUpInput = z.infer<typeof signUpInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type UpdatePost = z.infer<typeof updatePost>;
