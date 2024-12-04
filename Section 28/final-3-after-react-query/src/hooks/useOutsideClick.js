import { useEffect, useRef } from "react";

function useOutsideClick(close) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("Modal Closed");
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick);
  }, [close]);
  // return <div></div>;
  return ref;
}

export default useOutsideClick;
