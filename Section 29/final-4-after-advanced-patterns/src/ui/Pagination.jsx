import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const noOfPages = Math.ceil(count / PAGE_SIZE);

  if (noOfPages <= 1) return null;

  const page = Number(searchParams.get("page")) || 1;

  function handleNextPage() {
    if (page + 1 <= noOfPages) {
      searchParams.set("page", page + 1);
      setSearchParams(searchParams);
    }
  }

  function handlePrevPage() {
    if (page - 1 > 0) {
      searchParams.set("page", page - 1);
      setSearchParams(searchParams);
    }
  }

  return (
    <StyledPagination>
      <P>
        Showing<span> {(page - 1) * PAGE_SIZE + 1} </span> to{" "}
        <span>
          {" "}
          {count < page * (PAGE_SIZE - 1) + 1
            ? count
            : page * (PAGE_SIZE - 1) + 1}{" "}
        </span>{" "}
        of <span> {count} </span> results
      </P>
      <Buttons>
        <PaginationButton onClick={handlePrevPage}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={handleNextPage}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
