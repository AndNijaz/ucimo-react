import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: 100px;
  top: 100px;
`;
/* right: ${(props) => props.position.x}px; */
/* top: ${(props) => props.position.y}px; */

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [menuID, setMenuID] = useState("");
  const open = (id) => setMenuID(id);
  const close = () => setMenuID("");

  return (
    <MenusContext.Provider value={{ menuID, open, close }}>
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ id, children }) {
  const { menuID } = useContext(MenusContext);

  // if (menuID !== id) return null;

  return <StyledMenu>{children}</StyledMenu>;
}

function MenuToggle({ id }) {
  const { menuID, open, close } = useContext(MenusContext);

  function handleClick() {
    // menuID === id || menuID !== id ? close() : cosole.log("hahaahha");
    menuID === "" || menuID !== id ? open(id) : close();
  }

  return (
    <StyledButton onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledButton>
  );
}

function MenuList({ children, id }) {
  const { menuID } = useContext(MenusContext);

  if (id !== menuID) return null;

  return (
    <StyledList>
      {id} {children}
    </StyledList>
  );
}
function MenuButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

Menus.Menu = Menu;
Menus.MenuToggle = MenuToggle;
Menus.MenuList = MenuList;
Menus.MenuButton = MenuButton;

export default Menus;
