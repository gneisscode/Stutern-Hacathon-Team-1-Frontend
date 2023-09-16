"use client"
import UserLayout from '@/components/layouts/UserLayout';
import Scan from '@/components/shared/Scan';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useRef } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddProducts = () => {

    
  const defaultValues = {
    name: "",
    barcode: "",
    price:"",
    category: "",
    expiryDate:"",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Enter product name"),
    barcode: yup.string().required("Enter product barcode"),
    price: yup.string().required("Enter product price"),
    category: yup.string().required("Enter product category"),
    expiryDate: yup.string().required("Enter product expiration date"),
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
      { name: "Product Name", id: "name", placeholder: "Product Name" },
      {
        name: "Product Barcode",
        id: "barcode",
        placeholder: "Product Barcode",
      },
      {
        name: "Product Price",
        id: "price",
        placeholder: "Product Price",
      },
      {
        name: "Product Category",
        id: "category",
        placeholder: "Product Category",
      },

      {
        name: "Expiration Date",
        id: "expiryDate",
        placeholder: "Expiration Date",
      },
    ];
  return (
    <UserLayout>
      <div className='text-[22px] text-slate-600 font-bold mb-8'>Add new product to inventory</div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-start gap-4">
          <Scan barcodeInputRef={barcodeInputRef}/>
          <div>
            <form
            //   onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8 w-[100%]"
            >

                {details.map((i,index) => {
                    return (
                      <div className="flex flex-col w-full gap-2">
                        <Label htmlFor={i.id}>{i.name}</Label>
                        <Controller
                          name={i.id}
                          control={control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
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
                Add product
              </Button>
            </form>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default AddProducts