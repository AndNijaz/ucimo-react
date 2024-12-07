import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    const sort = e.target.value;
    searchParams.set("sort", sort);
    setSearchParams(searchParams);
  }

  return (
    <Select options={options} onChange={handleClick}>
      SortBy
    </Select>
  );
}

export default SortBy;
