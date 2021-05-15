import { Close } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppSelector } from "app/hooks";
import { selectCars } from "features/car/carSlice";
import { useState } from "react";
import styled, { AnyStyledComponent, StyledComponent } from "styled-components";

type Component = StyledComponent<"div", any, {}, never> & {
  Item: AnyStyledComponent;
  Menu: AnyStyledComponent;
};

const Header = () => {
  const cars = useAppSelector(selectCars);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Nav>
        <Link href="/">
          <Logo src="/images/logo.svg" />
        </Link>

        <Menu>
          {cars.map((car) => (
            <Menu.Item key={car}>
              <Link href="#">{car}</Link>
            </Menu.Item>
          ))}

          <Menu.Item>
            <Link href="#">PowerWall</Link>
          </Menu.Item>

          <Menu.Item>
            <Link href="#">Charging</Link>
          </Menu.Item>
        </Menu>

        <Menu>
          <Menu.Item>
            <Link href="#">Shop</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#">Tesla Account</Link>
          </Menu.Item>

          <Menu.Item className="menu-icon" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </Menu.Item>
        </Menu>

        <BurgerNav isOpen={isOpen}>
          <CloseIcon onClick={() => setIsOpen(false)}>
            <Close />
          </CloseIcon>

          {cars.map((car) => (
            <li key={car}>
              <Link href="#">{car}</Link>
            </li>
          ))}

          <li>
            <Link href="#">Existing Inventory</Link>
          </li>
          <li>
            <Link href="#">Used Inventory</Link>
          </li>
          <li>
            <Link href="#">Trade-In</Link>
          </li>
          <li>
            <Link href="#">Fleet abd Business</Link>
          </li>
          <li>
            <Link href="#">Cybertruck</Link>
          </li>
          <li>
            <Link href="#">Roadster</Link>
          </li>
          <li>
            <Link href="#">Semi</Link>
          </li>
          <li>
            <Link href="#">Commercial Energy</Link>
          </li>
          <li>
            <Link href="#">Utilities</Link>
          </li>
          <li>
            <Link href="#">Energy</Link>
          </li>
          <li>
            <Link href="#">Test Drive</Link>
          </li>
          <li>
            <Link href="#">Charging</Link>
          </li>
          <li>
            <Link href="#">Find Us</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
          <li>
            <Link href="#">Support</Link>
          </li>
        </BurgerNav>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  min-height: 60px;
  position: fixed;
  z-index: 10;
`;

const Nav = styled.nav`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow-x: hidden;

  & ul li {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  @media (min-width: 1024px) {
    & ul li {
      display: block;
    }
  }
`;

const Link = styled.a`
  text-transform: uppercase;
`;

const Logo = styled.img``;

const Menu = styled.ul`
  display: flex;
  align-items: center;
` as Component;

const MenuItem = styled.li`
  padding: 10px;

  a,
  svg {
    color: black;
    cursor: pointer;
  }
`;

Menu.Item = MenuItem;

const BurgerNav = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translatex(100%)")};
  width: 300px;
  padding: 20px;
  transition: transform 0.2s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;

  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: bold;
    }
  }
`;

const CloseIcon = styled.div`
  text-align: right;

  svg {
    cursor: pointer;
  }
`;

export default Header;
