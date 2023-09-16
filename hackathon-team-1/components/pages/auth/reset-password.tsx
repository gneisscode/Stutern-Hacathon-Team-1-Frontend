"use client"
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function ResetPassword() {

  const defaultValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    newPassword: yup.string().required("Enter new password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords must match")
      .required("Confirm new password"),
  });

  const {
    getValues,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log("Submitted");
    // This function will be called when the form is submitted with valid data

    // Add your sign-in logic here, e.g., making an API request
  };
  return (
    <div className="flex flex-col items-center py-8 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Card className="w-[90%] lg:w-[40%] flex flex-col items-center pb-8 lg:px-4">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[80%]">
          <CardTitle>Reset Password</CardTitle>
          <CardDescription className="text-center">
            Please confirm your new password
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-[100%]">

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    id="newPassword"
                    placeholder="New Password"
                  />
                )}
              />
              {errors.newPassword && (
                <p className="text-red-500">{errors.newPassword?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword?.message}</p>
              )}
            </div>
            <Button variant="default" type="submit">Reset Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
