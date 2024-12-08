import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
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

  const page = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    isError,
    data = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortValue, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const { bookings, count } = data;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortValue, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortValue, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      });

  return { isLoading, bookings, count };
}

export default useBookings;
