import { SignUpInput } from "ahaan-medium-blog";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BACKEND_URL} from "../config"
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()
  const [postInputs, setPostInput] = useState<SignUpInput>({
    email: "",
    password: "",
    name: "",
  });
  async  function  sendRequest(){
try {
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
    const jwt = response.data; 
    localStorage.setItem("token",jwt);
    navigate("/blogs");
    
} catch (error) {
    alert("Input is wrong")
}        
}
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div >
        <div className="px-10">
          <div className="text-3xl font-extrabold ">Create an account</div>
          <div className=" text-slate-400">
          {type==="signin"? "Don't have an account ":"Already have an account"}
            <Link className="pl-1 text-[#1877f2] underline" to={type==="signin"?"/signup":"/signin"}>
              {type==="signin"?"Sign up":"Sign in"}
            </Link>
          </div>
        </div>
        <div className="mt-4">
         {type ==="signup"? <LabelledInput
            label="Name "
            placeholder="John Doe "
            onChange={(e) => {
              setPostInput({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />:null}
          <LabelledInput
            label="Email"
            placeholder="JohnDoe@gmail.com"
            onChange={(e) => {
              setPostInput({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type={"password"}
            placeholder="xyz@1234"
            onChange={(e) => {
              setPostInput({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          </div>
          <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 mt-5 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in" }</button>

        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-2">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
        placeholder={placeholder}
        required
      />
    </div>
  );
}
