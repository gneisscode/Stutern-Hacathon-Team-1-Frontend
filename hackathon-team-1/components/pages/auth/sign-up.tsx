"use client"
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignUp() {
  const defaultValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Enter your first name"),
    surname: yup.string().required("Enter your surname"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
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
      <Card className=" w-[90%] lg:w-[40%] flex flex-col items-center lg:px-4">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to get started!</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-[100%]"
          >
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="name">Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="name"
                    id="name"
                    placeholder="Name"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="surname">Surname</Label>
              <Controller
                name="surname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="surname"
                    id="surname"
                    placeholder="Surname"
                  />
                )}
              />
              {errors.surname && (
                <p className="text-red-500">{errors.surname?.message}</p>
              )}
            </div>
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
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
            </div>

            <Button variant="default" type="submit">
              Sign up
            </Button>
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
