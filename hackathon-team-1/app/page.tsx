import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Home() {
  return (
    <div className="px-4 lg:px-[52px] mb-[100px]">
      <nav className="flex items-center justify-between w-[100%] mb-4">
        <Link href={"/"} className="flex items-center">
          <div className=" text-[20px] flex items-center mt-8 lg:text-[42px] font-bold text-[#0f172aff] mb-8">
            Diadem🗂️
          </div>
        </Link>
        <div className="flex gap-4 ">
          <Link href={"/auth/sign-in"}>
            <Button variant="default" className="w-[85px] lg:w-[155px]">
              Log in
            </Button>
          </Link>
          <Link href={"/auth/sign-up"}>
            <Button
              variant="outline"
              className="w-[85px] lg:w-[155px] border border-blue-950"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16">
        <img
          className=" w-[90%] lg:w-[40%]"
          src="https://img.freepik.com/free-vector/parcel-delivery-unpacking-receiving-order-box-contents-inspecting-female-consignee-cartoon-character-targeted-shipping-service_335657-2562.jpg"
        />
        <Card className="w-[90%] lg:w-[50%] flex flex-col items-center lg:px-4 border-none">
          <CardHeader className="flex flex-col mt-4 gap-4 w-[100%]">
            <CardTitle className="text-center lg:text-left lg:text-[28px] leading-[28px]">
              Inventory Management Made Easy ✨
            </CardTitle>
            <CardDescription className="text-center lg:text-start text-[18px]">
              Looking for a simple and intuitive way to keep track of your
              products? Look no further! Diadem provides you with all the tools
              you need to independently set up an inventory system:
            </CardDescription>
          </CardHeader>
          <CardContent className="w-[100%] text-[16px] font-bold">
            <ul className=" mt-4 list-none flex flex-col gap-4 font-medium">
              <li>✔ Scan product barcodes easily on our app</li>
              <li>✔ Fill, save, and retrieve product information </li>
              <li>✔ Group products by category</li>
              <li>✔ Search and filter effortlessly</li>
            </ul>
          </CardContent>

          <Link
            href={"/user/inventory-overview"}
            className="w-[155px] mt-4 mr-auto ml-[18px] mb-8"
          >
            <Button variant="default">View dashboard</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
