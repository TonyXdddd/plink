import React from "react";

export const TableRow = ({
  productData: {
   productName,
   sku,
   ram,
   hdd,
   price,
  },
  parentTrStyles, parentTdStyles, onClick,
}) => {
  return (
    <tr
      className={parentTrStyles}
      onClick={onClick}
    >
      <td className={parentTdStyles}>{ productName }</td>
      <td className={parentTdStyles}>{ sku }</td>
      <td className={parentTdStyles}>{ ram }</td>
      <td className={parentTdStyles}>{ hdd }</td>
      <td className={parentTdStyles}>{ price }</td>
    </tr>
  )
};
