import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      className="bg-transparent justify-end pr-12 pt-3 absolute "
      isBlurred={false}
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-20" justify="end">
        <NavbarItem>
          <Link className="text-whitelight" to="#introduction">
            Sobre Mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-whitelight" to="#experience">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-whitelight" to="#browser">
            Informacion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" to="#contact">
            Conatcto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
