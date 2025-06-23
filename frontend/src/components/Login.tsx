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
        <CardTitle>Login</CardTitle>
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
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};
