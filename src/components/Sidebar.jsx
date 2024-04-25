import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ellipse from "../assets/icon/ellipse.svg";
import user from "../assets/icon/Group 3.svg";
import Desk from "../assets/icon/Group.svg";
import Chair from "../assets/icon/Group 4.svg";
import Mic from "../assets/icon/Group 5.svg";
import Flag from "../assets/icon/Flag_of_India.svg";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";

const navItems = [
  <span>
    English <img src={ellipse} alt="ellipse" style={{ objectFit: "contain" }} />{" "}
  </span>,
  <img src={Mic} alt="Mic" style={{ objectFit: "contain" }} />,
  <img src={Chair} alt="Chair" style={{ objectFit: "contain" }} />,
  <img src={Desk} alt="Desk" style={{ objectFit: "contain" }} />,
  <img src={user} alt="User" style={{ objectFit: "contain" }} />,
];

function Headers() {

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ background: "#2AB998" }}
        position="fixed"
      >
        <Container fixed>
          <Toolbar variant="40px">
            <img src={Flag} alt="indian flag" />
            {/* Responsive Title */}
            <Typography
              variant="p"
              component="p"
              sx={{
                flexGrow: 1,
                fontSize: 14,
                px: 2,
              }}
              className="Quicksand"
            >
              <Link href="https://www.india.gov.in/" sx={{ color: "#fff" }}>
                GOVERNMENT OF INDIA
              </Link>
            </Typography>
            {/* Responsive Navigation Items */}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    color: "#fff",
                    borderRight:
                      index === navItems.length - 1 ? "" : "1px solid #ffff",
                    borderRadius: "0",
                    px: index === 0 ? 2 : 1,
                    display: "flex",
                    py: 0.9,
                    className: "Quicksand",
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

Headers.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Headers;
