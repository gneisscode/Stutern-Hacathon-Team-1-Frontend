import React from 'react'
import { Table } from "@mantine/core";
import { products } from './products';

const InventoryTable = () => {
      const rows = products.map((product) => (
        <tr key={product.name} className="cursor-pointer">
          <td>{product.name}</td>
          <td>{product.barcode}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.picture}</td>
          <td>{product.expiration}</td>
          <td>{product.createdAt}</td>
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
            <th>Name</th>
            <th>Barcode</th>
            <th>Category</th>
            <th>Price (₦)</th>
            <th>Picture</th>
            <th>Date Added</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default InventoryTable