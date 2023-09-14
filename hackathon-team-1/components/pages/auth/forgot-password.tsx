import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center p-[82px] w-[100%] min-h-[100vh]">
      <Card className="w-[50%] flex flex-col items-center pb-8">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[80%]">
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Please enter your email to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[80%] mt-4">
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <Button variant="default">Send recovery link</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
