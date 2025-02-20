import { useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
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
    { label: "Sobre Mi", to: "#introduction" },
    { label: "Experiencia", to: "#experience" },
    { label: "Informacion", to: "#browser" },
    { label: "Contacto", to: "#contact" },
  ];

  return (
    <Navbar
      className="bg-transparent justify-end pr-12 pt-3 absolute"
      isBlurred={false}
    >
      <NavbarContent className="hidden sm:flex gap-24" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            {item.label === "Contacto" ? (
              <Button as={Link} color="primary" to={item.to}>
                {item.label}
              </Button>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link className="text-white" to={item.to}>
                  {item.label}
                </Link>
              </motion.div>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
