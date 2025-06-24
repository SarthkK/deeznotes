import { Link, useNavigate } from "react-router";
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
import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { API_BASE_URL } from "@/utils/api";

export const Signup = () => {
  const navigate = useNavigate();

  const signUpSchema = z.object({
    name: z.string().min(1).trim(),
    email: z.string().email().trim(),
    password: z.string(),
  });
  const [signUpDetails, setSignUpDetails] = useState<
    z.infer<typeof signUpSchema>
  >({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);

  return (
    <Card className="w-full max-w-sm bg-black text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          Enter your Email, password and Name to Sign up
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            type="input"
            placeholder="John Doe"
            value={signUpDetails.name}
            onChange={(e) => {
              setSignUpDetails((val) => ({ ...val, name: e.target.value }));
            }}
            required
          ></Input>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@mail.com"
            onChange={(e) => {
              setSignUpDetails((val) => ({ ...val, email: e.target.value }));
            }}
            required
          ></Input>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setSignUpDetails((val) => ({ ...val, password: e.target.value }));
            }}
            required
          ></Input>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button
          variant="secondary"
          className="w-full"
          onClick={async (e) => {
            try {
              e.preventDefault();
              const result = signUpSchema.safeParse(signUpDetails);
              if (!result.success) {
                throw new Error();
              }
              const res = await axios.post(
                API_BASE_URL + "/api/v1/auth/signup",
                result.data
              );
              if (res.status == 200) {
                navigate("/");
              } else {
                throw new Error();
              }
            } catch {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 2000);
            }
          }}
        >
          Sign Up
        </Button>
        <Link to={"/login"}>
          <div className="w-full flex items-center justify-center text-white/50 text-sm hover:text-white/60 hover:underline hover:cursor-pointer">
            Already have an account? Log In!
          </div>
        </Link>
        {error && (
          <div className="w-full flex items-center justify-center text-red-500 text-sm">
            There was an error trying to sign up
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
