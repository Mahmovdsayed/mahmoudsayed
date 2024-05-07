import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MdVerified } from "react-icons/md";

export default function Nav() {
    return (
        <Navbar isBordered shouldHideOnScroll >
            <NavbarBrand>
            </NavbarBrand>
            <NavbarContent justify="center">
                <p className="font-bold text-tiny uppercase flex items-center justify-center">Mahmoud sayed <span className="ms-1 text-lg"><MdVerified /></span></p>
            </NavbarContent>
            <NavbarContent justify="end">

            </NavbarContent>
        </Navbar>
    );
}
