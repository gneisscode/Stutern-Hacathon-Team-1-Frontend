"use client";
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
import { useMutation } from "@tanstack/react-query";
import { axiosWithoutToken } from "@/utils/axios";
import Link from "next/link";

export default function VerifyEmail() {
  const defaultValues = {
    email: "",
    otp: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Enter your email"),
    otp: yup
      .string()
      .required("Enter one time pin"),
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


  const onSubmit = () => {};
  return (
    <div className="flex flex-col items-center py-8 lg:p-[82px] w-[100%] min-h-[100vh]">
      <Link href={"/"}>
        <div className="lg:text-[32px] font-bold text-[#0f172aff] mb-8">
          Diadem🗂️
        </div>
      </Link>

      <Card className="w-[90%] lg:w-[40%] flex flex-col items-center pb-8 lg:px-4">
        <CardHeader className="flex flex-col items-center mt-4 gap-4 w-[100%]">
          <CardTitle>Verify Email</CardTitle>
          <CardDescription className="text-center">
            Please enter your email and One Time Pin
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[100%] mt-4">
          {/* {mutation.isError && (
            <p className="text-center pb-2 text-red-500">
              {mutation?.error?.message || "An error occured during sign up"}
            </p>
          )} */}
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

            <div className="flex flex-col w-full gap-2">
              <Label htmlFor="otp">OTP</Label>
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    id="otp"
                    placeholder="OTP"
                  />
                )}
              />
              {errors.otp && (
                <p className="text-red-500">{errors.otp?.message}</p>
              )}
            </div>
            <Button
              variant="default"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Verify email
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
