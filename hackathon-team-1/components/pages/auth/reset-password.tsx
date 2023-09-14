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


export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center py-8 lg:py-0 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Card className="w-[90%] flex flex-col items-center pb-8">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[80%]">
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Please confirm your new password</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                type="newPassword"
                id="newPassword"
                placeholder="New Password"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <Button variant="default">Reset Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
