import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

export const Login = () => {
  return (
    <Card className="w-full max-w-sm bg-black text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your Email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@mail.com"
            required
          ></Input>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="password"
            required
          ></Input>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button variant="secondary" className="w-full">
          Login
        </Button>
        <Link to={"/signup"}>
          <div className="w-full flex items-center justify-center text-white/50 text-sm hover:text-white/60 hover:underline hover:cursor-pointer">
            Don't have an account? Sign Up!
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};
