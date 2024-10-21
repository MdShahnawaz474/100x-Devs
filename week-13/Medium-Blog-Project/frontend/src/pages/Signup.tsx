import { Auth } from "../componets/Auth"
import { Qoute } from "../componets/Qoute"
export const Signup = ()=>{
    return (
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
          <div className="invisible lg:visible ">
          <Qoute/>
          </div>
        </div>
    )
}