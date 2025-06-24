import { Link } from "react-router";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="py-5 px-5 border-b border-black bg-black w-full text-white flex justify-between items-center fixed z-50 shadow-2xl shadow-white/10">
      <Link to={"/"}>
        <div>
          <p className="font-extrabold">Deez Notes</p>
        </div>
      </Link>
      <div className="flex gap-5 items-center">
        <Link to={"/signup"}>
          <Button className="hover:cursor-pointer">Sign up</Button>
        </Link>
        <Link to={"/login"}>
          <Button className="hover:cursor-pointer">Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
