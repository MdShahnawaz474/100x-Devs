import { Auth } from "../componets/Auth";
import { Qoute } from "../componets/Qoute";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin"/>
      </div>
      <div className="hidden lg:block">
        <Qoute  />
      </div>
    </div>
  );
};
