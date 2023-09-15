"use client"
import React from "react";
import { Table } from "@mantine/core";
import {categorizedData} from "./categorized"

const CategorizedView = () => {
  const rows = categorizedData.map((product) => (
    <tr key={product.product} className="cursor-pointer">
      <td>{product.product}</td>
      <td>{product.quantity}</td>
      <td>{product.minimumQuantity}</td>
      <td>{product.price}</td>
      <td>{product.total}</td>
      <td>{product.status}</td>
      <td>{product.UpdatedAt}</td>
    </tr>
  ));

  return (
    <div className="w-[100%] overflow-x-auto">
      <Table
        verticalSpacing="xs"
        fontSize="xs"
        striped
        highlightOnHover
        withBorder
        withColumnBorders
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Minimum Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default CategorizedView;
