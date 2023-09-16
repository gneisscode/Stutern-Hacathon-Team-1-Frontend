import AddProducts from "@/components/pages/user/AddProducts";
import { ResultsProvider } from "@/context/ResultContext";
import { NextPage } from "next";
import React from "react";

const AddProductsPage: NextPage = () => {
  return (
    <ResultsProvider>
      <AddProducts />
    </ResultsProvider>
  );
};

export default AddProductsPage;
