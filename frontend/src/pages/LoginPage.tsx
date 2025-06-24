import Header from "@/components/Header";
import { Login } from "@/components/Login";

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <div className="pt-[77px] min-h-screen flex items-center justify-center">
        <Login></Login>
      </div>
    </>
  );
};

export default LoginPage;
