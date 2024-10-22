import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const SinglePageBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">
                Posted on 23rd october 2024
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="bg-green-200 col-span-4">Hello</div>
        </div>
      </div>
    </div>
  );
};
