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
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { axiosWithoutToken } from "@/utils/axios";
import { Loader } from "@mantine/core";


export default function SignUp() {
  const router = useRouter();

  const defaultValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Enter your first name"),
    lastName: yup.string().required("Enter your surname"),
    username: yup.string().required("Enter a username"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password"),
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

   
 const signupRequest = async () => {
   try {
     const response = await axiosWithoutToken.post("/user/signup", getValues());
     console.log(response);
     router.push("/auth/sign-in");
   } catch (error: any) {
     console.log(error);
     throw new Error(error?.response?.data?.message || "An error occurred");
   }
 };

  const mutation: any = useMutation(signupRequest, {
    onSuccess: (res: any) => {
      console.log("hello");
      
      // if (res?.data) {
        
      // }
    },
  });

  const onSubmit = () => mutation.mutate();


  return (
    <div className="flex flex-col items-center py-8 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Link href={"/"}>
        <div className="lg:text-[32px] font-bold text-[#0f172aff] mb-8">
          Diadem🗂️
        </div>
      </Link>
      <Card className=" w-[90%] lg:w-[40%] flex flex-col items-center lg:px-4">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to get started!</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          {mutation.isError && (
            <p className="text-center pb-2 text-red-500">
              {mutation?.error?.message || "An error occured during sign up"}
            </p>
          )}
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="username">Username</Label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="username"
                    placeholder="Username"
                  />
                )}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username?.message}</p>
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
                <p className="text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <Button
              variant="default"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading && (
                <Loader variant="dots" size="md" className="mr-2" />
              )}
              Sign up
            </Button>
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
