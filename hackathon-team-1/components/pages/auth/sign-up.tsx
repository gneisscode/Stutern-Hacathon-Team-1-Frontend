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

export default function SignUp() {
  return (
    <div className="flex flex-col items-center py-8 lg:py-0 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Card className=" w-[90%] lg:w-[50%] flex flex-col items-center">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to get started!</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="name" id="name" placeholder="Name" />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="surname">Surname</Label>
              <Input type="surname" id="surname" placeholder="Surname" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <Button variant="default">Sign up</Button>
            <Button variant="outline">Sign up with google</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p>
            Already have an account?
            <Link href={"/auth/sign-in"} className="text-blue-500">
              &nbsp;Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
