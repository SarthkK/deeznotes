import Header from "@/components/Header";
import { Signup } from "@/components/Signup";

const SignupPage = () => {
  return (
    <>
      <Header></Header>
      <div className="pt-[77px] min-h-screen flex items-center justify-center">
        <Signup></Signup>
      </div>
    </>
  );
};

export default SignupPage;
