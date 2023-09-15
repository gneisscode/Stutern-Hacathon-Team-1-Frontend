import UserLayout from '@/components/layouts/UserLayout'
import React from 'react'
import CategorizedView from "@/components/shared/CategorizedView";

const InventoryOverview = () => {
  return (
    <UserLayout>
        <CategorizedView/>
    </UserLayout>
  );
}

export default InventoryOverview