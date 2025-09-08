import {useNavigate} from "@tanstack/react-router";
import {
    Box,
    Button,
    Link
} from "@mui/material";
import React from "react";
import { MenuItem, Sidebar, Submenu, Menu} from "react-mui-sidebar";

interface DrawerProps {
    isOpen: boolean;
    darkMode: boolean;
}

export function NavBar({ isOpen, darkMode }: DrawerProps) {
    return (
        <Sidebar
            width="auto"
            showProfile={false}
            themeColor="#4c67bd"
            themeSecondaryColor="#4c5159"
            mode={darkMode ? "dark" : "light"}
            isCollapse={!isOpen}
        >
            <Menu subHeading="HLAVNÍ">
                <MenuItem component={Link} link="/lights" badge isSelected>
                    Světla
                </MenuItem>
                <MenuItem component={Link} link="/groups">Skupiny</MenuItem>
                <MenuItem component={Link} link="/ana">Scény</MenuItem>
            </Menu>
            <Menu>
                <Submenu title="Konfigurace">
                    <MenuItem>Most</MenuItem>
                    <MenuItem>Světla</MenuItem>
                </Submenu>
                <MenuItem>Nastavení</MenuItem>
            </Menu>
        </Sidebar>
    );
}

export function DrawerContainer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => setOpen((prev) => !prev);

    return (
        <Box sx={{width: "15rem"}}>
            <Button onClick={toggleDrawer}>
                {open ? "Close drawer" : "Open drawer"}
            </Button>
            <NavBar isOpen={open} darkMode={false} />
        </Box>
    );
}
