import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-8">
      <div className=" text-[22px] lg:text-[42px] font-bold"> Welcome to Home</div>
      <Link href={"/auth/sign-in"} className="text-blue-500">
        Sign In
      </Link>
      <Link href={"/auth/sign-up"} className="text-blue-500">
        Sign Up
      </Link>

      <Link href={"/auth/forgot-password"} className="text-blue-500">
        Forgot Password
      </Link>

      <Link href={"/auth/reset-password"} className="text-blue-500">
        Reset Password
      </Link>
    </div>
  );
}
