"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { Add, Cog, Inventory, Logout, Products } from "../icons";
import { Context } from "@/context/Context";


const UserLayout = ({ children }: any) => {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any) || null
      : null;

  const nav = [
    {
      item: "Inventory overview",
      path: "/user/inventory-overview",
      icon: <Inventory />,
    },
    { item: "All products", path: "/user/all-products", icon: <Products /> },
    { item: "Add new product", path: "/user/add-product", icon: <Add /> },
    { item: "Settings", path: "/user/settings", icon: <Cog /> },
  ];

  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    if (typeof window !== "undefined") {
      window.location.href = "/auth/sign-in";
    }
  };

    useEffect(() => {

      if(!user || user.token){
         handleLogout();
      }
    }, []);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          className="text-white bg-[#0f172aff] flex flex-col gap-8"
        >
          {nav.map((i, index) => {
            const isActive = pathname === i.path;
            return (
              <Link
                href={i.path}
                key={index}
                className={`${
                  isActive
                    ? "bg-[#e7e5e5] text-blue-300 bg-opacity-20 font-bold"
                    : ""
                } flex gap-2 items-center hover:text-blue-300 p-2 rounded-sm font-semibold  text-[16px] transition-all ease-linear delay-150`}
              >
                {i.icon} <Text>{i.item}</Text>
              </Link>
            );
          })}

          <Link
            href={"/"}
            className="mt-auto flex gap-2 items-center font-semibold text-[16px]"
            onClick={()=> {handleLogout()}}
          >
            <Logout />
            Logout
          </Link>
        </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      //     <Aside
      //       p="md"
      //       hiddenBreakpoint="sm"
      //       width={{ sm: 200, lg: 300 }}
      //       className="text-white bg-[#0f172aff]"
      //     >
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Header
          height={{ base: 50, md: 100 }}
          p="md"
          className="text-white bg-[#0f172aff]"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link href={"/"}>
              <Text className="lg:text-[32px] font-bold text-white">
                Diadem🗂️
              </Text>
            </Link>

            <div className="w-[30%] lg:w-[40%]">
              <Input
                placeholder="Search product"
                className="h-[22px] lg:h-[45px] text-black"
              />
            </div>

            <div className="hidden lg:block lg:text-[20px] font-medium">
              Welcome back, {user !==null && user.user}
            </div>
          </div>
        </Header>
      }
    >
      <div>{children}</div>
    </AppShell>
  );
};

export default UserLayout;
