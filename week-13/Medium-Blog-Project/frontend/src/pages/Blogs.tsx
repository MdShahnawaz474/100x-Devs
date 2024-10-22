import { Appbar } from "../componets/Appbar";
import { BlogCard } from "../componets/Blogcard";

export const Blogs = () => {
  return (<div><Appbar/>
    <div className="flex justify-center ">
      <div className="max-w-xl">
        <BlogCard
          authorName={"Md Shahnawaz"}
          title={"shahnawaz first blog Lorem ipsum dolor, sit amet consectetur adipisicin"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet?"
          }
          publishedDate={"22 Oct 2024"}
        />
        <BlogCard
          authorName={"Md Shahnawaz"}
          title={"shahnawaz first blog Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunero! Ullam? "}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet?"
          }
          publishedDate={"22 Oct 2024"}
        />
        <BlogCard
          authorName={"Md Shahnawaz"}
          title={"shahnawaz first blog Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt facilis consequuntur dolorum ullam nemo quaerat illum tempore ut vero! Ullam? "}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet?"
          }
          publishedDate={"22 Oct 2024"}
        />
        <BlogCard
          authorName={"Md Shahnawaz"}
          title={"shahnawaz first blog Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt facilis consequuntur dolorum ullam nemo quaerat illum tempore ut vero! Ullam? "}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet?"
          }
          publishedDate={"22 Oct 2024"}
        />
        <BlogCard
          authorName={"Md Shahnawaz"}
          title={"shahnawaz first blog Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt facilis consequuntur dolorum ullam nemo quaerat illum tempore ut vero! Ullam? "}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet?"
          }
          publishedDate={"22 Oct 2024"}
        />
      </div>
    </div>
    </div>
  );
};
