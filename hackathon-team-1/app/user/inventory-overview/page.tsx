import UserLayout from '@/components/layouts/UserLayout'
import React from 'react'
import CategorizedView from "@/components/shared/CategorizedView";

const InventoryOverview = () => {
  return (
    <UserLayout>
      <div className="text-[22px] text-slate-600 font-bold mb-8">
        Inventory Overview
      </div>
      <CategorizedView />
    </UserLayout>
  );
}

export default InventoryOverview