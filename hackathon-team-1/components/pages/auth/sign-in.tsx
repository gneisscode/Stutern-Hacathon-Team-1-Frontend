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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {axiosWithoutToken } from "@/utils/axios";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { Loader } from "@mantine/core";



export default function SignIn() {
const { dispatch} = useContext(Context);

 const router = useRouter();
 const defaultValues = {
   email: "",
   password: "",
 };

 const validationSchema = yup.object().shape({
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
   formState: { errors },
 } = useForm({
   defaultValues,
   resolver: yupResolver(validationSchema),
 });

 const loginRequest = async () => {
   try {
     const response = await axiosWithoutToken.post("/user/login", getValues());
     console.log(response.data);
     dispatch({ type: "LOGIN_SUCCESS", payload: response?.data });
     if(typeof window !== "undefined"){
      window.location.href = "/user/inventory-overview";

     }
   } catch (error: any) {
    console.log(error);
     dispatch({ type: "LOGIN_FAILURE" });
     throw new Error(error?.response?.data?.message || "An error occurred");
   }
 };

 const mutation: any = useMutation(loginRequest, {
   onSuccess: (res: any) => {
     console.log(res?.data);
    //  if (res?.data) {
    //    dispatch({ type: "LOGIN_SUCCESS", payload: res?.data });
    //    router.push("/user/all-products");
    //  }
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
      <Card className="w-[90%] lg:w-[40%] flex flex-col items-center lg:px-4">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome back!</CardDescription>
        </CardHeader>
        <CardContent className="w-[100%]">
          {mutation.isError && (
            <p className="text-center pb-2 text-red-500">
              {mutation?.error?.message || "An error occured during sign up"}
            </p>
          )}
          <form action="submit" className="flex flex-col gap-8 w-[100%]">
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
            <div className="flex flex-col w-full gap-2 mb-8">
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
              <Link
                href={"/auth/forgot-password"}
                className="self-end text-blue-500"
              >
                <p>Forgot password</p>
              </Link>
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
              Sign in
            </Button>
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
