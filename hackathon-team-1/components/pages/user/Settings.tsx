"use client";
import UserLayout from "@/components/layouts/UserLayout";
import Scan from "@/components/shared/Scan";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Settings = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    username: "",
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    companyName: yup.string(),
    email: yup.string(),
   username: yup.string(),
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

  const barcodeInputRef = useRef(null);
  const details: any[] = [
    { name: "First Name", id: "firstName", placeholder: "First Name" },
    {
      name: "Last Name",
      id: "lastName",
      placeholder: "Last Name",
    },
    {
      name: "Username",
      id: "username",
      placeholder: "Username",
    },
    {
      name: "Company Name",
      id: "companyName",
      placeholder: "Company Name",
    },
    {
      name: "Email",
      id: "email",
      placeholder: "Email",
    },
    {
      name: "Phone Number",
      id: "phoneNumber",
      placeholder: "Phone Number",
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <form
          //   onSubmit={handleSubmit(onSubmit)}
          className=" gap-8 w-[100%] lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 pb-[50px]"
        >
          {details.map((i, index) => {
            return (
              <div className="flex flex-col w-full gap-2" key={index}>
                <Label htmlFor={i.id}>{i.name}</Label>
                <Controller
                  name={i.id}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type={i.id === "email" ? "email" : "text"}
                      id={i.id}
                      placeholder={i.placeholder}
                      ref={i.id === "barcode" ? barcodeInputRef : null}
                    />
                  )}
                />

                {/* {errors.{i.id} && (
                          <p className="text-red-500">
                            {errors.{i.id}?.message}
                          </p>
                        )} */}
              </div>
            );
          })}

          <Button variant="default" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
