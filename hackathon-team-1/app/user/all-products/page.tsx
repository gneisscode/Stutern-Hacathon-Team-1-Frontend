"use client"

import UserLayout from "@/components/layouts/UserLayout"
import InventoryTable from "@/components/shared/Table"


export default function AllProducts() {
    return (
      <UserLayout>
        <div className="text-[22px] text-slate-600 font-bold mb-8">
          All Products
        </div>
        <InventoryTable />
      </UserLayout>
    );
 
}
