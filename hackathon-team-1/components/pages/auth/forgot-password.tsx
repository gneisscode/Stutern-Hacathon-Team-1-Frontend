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

export default function ForgotPassword() {

   const defaultValues = {
     email: "",
   };

   const validationSchema = yup.object().shape({
     email: yup
       .string()
       .email("Enter a valid email")
       .required("Enter your email"),
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
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Please enter your email to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[100%] mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <Button variant="default" type="submit">Send recovery link</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
