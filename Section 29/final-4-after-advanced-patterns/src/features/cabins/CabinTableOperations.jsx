import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        label="discount"
        options={[
          { label: "All", value: "all" },
          { label: "With Discount", value: "with-discount" },
          { label: "No Discount", value: "no-discount" },
        ]}
      />
      <SortBy />
    </TableOperations>
  );
}

export default CabinTableOperations;
