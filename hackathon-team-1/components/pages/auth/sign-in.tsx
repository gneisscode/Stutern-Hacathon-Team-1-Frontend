import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center py-8 lg:py-0 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Card className=" w-[90%] lg:w-[50%] flex flex-col items-center">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome back!</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col w-full gap-2 mb-8">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
              <Link
                href={"/auth/forgot-password"}
                className="self-end text-blue-500"
              >
                <p>Forgot password</p>
              </Link>
            </div>

            <Button variant="default">Sign in</Button>
            <Button variant="outline">Sign in with google</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p>
            Don&apos;t have an account?
            <Link href={"/auth/sign-up"} className="text-blue-500">
              &nbsp;Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
