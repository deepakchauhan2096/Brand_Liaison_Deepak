import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderLogo from "../assets/icon/Header-logo.svg";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import arrowDown from "../assets/icon/pseudo.svg";
import AppDrawer from "./AppDrawer";

function Navbar({ navItems, navItems1 }) {
  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          background: "#ffff",
          marginTop: "35px",
          zIndex: 1,
          height: "85px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container fixed>
          <Toolbar sx={{ bgcolor: "transparent" }}>
            <Typography
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                textDecoration: "underline",
                fontSize: 14,
                px: 0,
              }}
              className="Quicksand"
            >
              <img src={HeaderLogo} alt="indian flag" />
            </Typography>
            {/* Responsive Navigation Items */}.
            <AppDrawer navItems={navItems} />
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
            >
              {navItems.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    color: "#6C6C6C",
                    borderRight:
                      index === navItems.length - 1 ? "" : "1px solid #ffff",
                    borderRadius: "0",
                    px: index === 0 ? 2 : 1,
                    display: "flex",
                    margin: "auto",
                    py: 0.9,
                    fontSize: "13.19px",
                  }}
                  className="Quicksand"
                >
                  <Link
                    href="#"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span>
                      {item}
                      <img
                        src={arrowDown}
                        alt="ellipse"
                        style={{ objectFit: "contain", paddingLeft: "15px" }}
                      />
                    </span>
                  </Link>
                </Box>
              ))}
              {navItems1.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    color: "#6C6C6C",
                    borderRight:
                      index === navItems.length - 1 ? "" : "1px solid #ffff",
                    borderRadius: "0",
                    px: index === 0 ? 2 : 1,
                    display: "flex",
                    margin: "auto",
                    py: 0.9,
                    fontSize: "13.19px",
                  }}
                >
                  <Link
                    href="#"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    
                    <img src={item} alt={index} />,
                  </Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
