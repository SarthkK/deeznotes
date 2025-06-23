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

export const Signup = () => {
  return (
    <Card className="w-full max-w-sm bg-black text-white">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Enter your Email, password and Name to Sign up
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <Input id="name" type="input" placeholder="John Doe" required></Input>
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
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
};
