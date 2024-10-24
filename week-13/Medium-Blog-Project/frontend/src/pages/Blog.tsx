import { SinglePageBlog } from "../componets/SinglePageBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = ()=>{
    const {id} = useParams();
    const {loading,blog} = useBlog({
        id: id ||""
    });
    if(loading){
     return   <div>Loading....</div>
    }
    return(<div>
        <SinglePageBlog blog={blog}/>
    </div>)
}