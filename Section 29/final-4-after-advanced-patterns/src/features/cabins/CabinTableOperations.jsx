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
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low-first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high-first)" },
          { value: "regularPrice-asc", label: "Sort by price (low-first)" },
          { value: "regularPrice-desc", label: "Sort by price (high-first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;