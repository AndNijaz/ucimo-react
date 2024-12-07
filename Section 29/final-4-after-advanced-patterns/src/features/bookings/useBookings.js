import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, metnod: "eq" };

  const sortValue = searchParams.get("sort") || "startDate-desc";
  // console.log(sortValue);
  // if(sortValue)
  const [sortParam, direction] = sortValue.split("-");
  const sortBy = { sortParam, direction };

  const {
    isLoading,
    isError,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortValue],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings };
}

export default useBookings;
