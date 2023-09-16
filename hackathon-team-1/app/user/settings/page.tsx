import UserLayout from '@/components/layouts/UserLayout'
import Settings from '@/components/pages/user/Settings';
import { NextPage } from 'next';
import React from 'react'

const SettingsPage: NextPage = () => {
  return (
    <UserLayout>
      <div className="text-[22px] text-slate-600 font-bold mb-8">
       Settings
      </div>
      <Settings/>
    </UserLayout>
  );
}

export default SettingsPage