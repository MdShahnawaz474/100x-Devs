import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return <Link to={`${id}`}> <div className="p-4 border-b border-slate-400 pb-4 w-screen max-w-screen-md cursor-pointer ">
    <div className="flex">
      <div className="flex ">
        <Avatar size="small" name={authorName} />
      </div>

      <div className="pl-2 justify-center flex-col tex-sm font-extralight">{authorName}</div>

      <div className="flex justify-center flex-col pl-2 mt-1"><Circle/></div>

      <div className="pl-2 text-sm font-thin mt-0.5 justify-center flex-col text-slate-500">{publishedDate}

      </div>
      </div>

      <div className="text-xl font-semibold pt-2">{title}</div>

      <div className="text-sm font-thin">{content.slice(0, 100) + "...."}</div>

      <div className="text-slate-400 text-md pt-4 ml-1 font-thin">{`${Math.ceil(content.length / 100)}minute(s) read`}</div>

    
    </div>
    </Link>
};


function Circle(){
    return <div className=" h-1 w-1 rounded-full bg-slate-500 ">

    </div>
}

export function Avatar({ name,size ="small" }: { name: string ,size:"small"|"big"}) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size==="small"?"w-6 h-6":"w-10 h-10" }`}>
      <span className={` text-gray-600 dark:text-gray-300  ${size==="small"?"text-xs":"text-xl"}`}>
        {name[0]}
      </span>
    </div>
  );
}
