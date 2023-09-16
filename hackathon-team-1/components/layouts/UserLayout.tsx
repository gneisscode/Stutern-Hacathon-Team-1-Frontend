"use client"
import React, { useState } from "react";
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
import { Logout } from "../icons";

const UserLayout = ({children}:any) => {
  const pathname = usePathname();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const nav = [
    { item: "Inventory overview", path: "/user/inventory-overview" },
    { item: "All products", path: "/user/all-products" },
    { item: "Add new product", path: "/user/add-product" },
    { item: "Settings", path: "/user/settings" },
  ];
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
          className="text-white bg-[#0f172aff] flex flex-col"
        >
          {nav.map((i, index) => {
             const isActive = pathname === i.path;
            return (
              <Link
                href={i.path}
                key={index}
                className={`${
                  isActive ? "bg-[#e7e5e5] text-blue-500 bg-opacity-20 font-bold" : ""
                } hover:text-blue-500 p-2 rounded-sm font-semibold  text-[16px]`}
              >
                <Text>{i.item}</Text>
              </Link>
            );
          })}

          <div className="mt-auto flex gap-2 items-center font-semibold text-[16px]"> 
          <Logout/>Logout</div>
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

            <Text className="lg:text-[38px] font-bold text-blue-500">
              SIMS ✅
            </Text>

            <div className="w-[30%] lg:w-[40%]">
              <Input placeholder="Search product" className="h-[22px] lg:h-[45px] text-black"/>
            </div>

            <div className="hidden lg:block lg:text-[20px] font-medium">Welcome back, user</div>
          </div>
        </Header>
      }
    >
      <div>{children}</div>
    </AppShell>
  );
};

export default UserLayout;
