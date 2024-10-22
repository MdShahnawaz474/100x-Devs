import { Appbar } from "../componets/Appbar";
import { BlogCard } from "../componets/Blogcard";
import { useBlogs } from "../hooks";

export const Blogs = () => {

  const {loading,blogs} = useBlogs();

  if(loading){
    return<div>
      loading....
    </div>
  }
  return (<div><Appbar/>
    <div className="flex justify-center ">
      <div >

        {blogs.map((blog,index)=><BlogCard
        id={blog.id} key={index}
          authorName={blog.author.name ||"Anounmous"}
          title={blog.title}
          content={
           blog.content
          }
          publishedDate={"22 Oct 2024"}
        />)}
        
      
      
      
      </div>
    </div>
    </div>
  );
};
