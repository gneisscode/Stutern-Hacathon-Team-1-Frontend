"use client"
import { Context } from '@/context/Context';
import axios from 'axios'
import { useContext } from 'react';

const baseURL = "https://inventorymanagement-mgmh.onrender.com/api/v1";



export const axiosWithoutToken = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const axiosWithToken = () => {
  const { user } = useContext(Context);

  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  });
};