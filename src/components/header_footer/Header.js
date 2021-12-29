import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SiderDrawer from "./SideDrawer";
import { useState, useEffect } from "react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = (openState) => {
    setDrawerOpen(openState);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: headerShow ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_vanue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <SiderDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
