import { Auth } from "../componets/Auth"
import { Qoute } from "../componets/Qoute"
export const Signup = ()=>{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup"/>
            </div>
          <div className="hidden lg:block ">
          <Qoute/>
          </div>
        </div>
    )
}