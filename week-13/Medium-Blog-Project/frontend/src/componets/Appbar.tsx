import { Link } from "react-router-dom"
import { LOGO_URL } from "../config"
import { Avatar } from "./Blogcard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 py-4 font-bold">
        <div className=" flex flex-col justify-center h-6 w-28 mt-2">
        <Link to={"/blogs"}><img src={LOGO_URL} alt="logo"/></Link>
        </div>
        <div>
            <Avatar size="big" name="MD Shahnawaz"/>
        </div>
    </div>
}
