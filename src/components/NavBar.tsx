import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/pexels-teona-swift-6913396.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px"></Image>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
