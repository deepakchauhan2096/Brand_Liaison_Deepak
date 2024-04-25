import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Flag from "../assets/icon/Flag_of_India.svg";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";



function Headers({navItems}) {
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
              <Link
                href="https://www.india.gov.in/"
                sx={{ color: "#fff", display: { xs: "none", sm: "block" } }}
              >
                GOVERNMENT OF INDIA
              </Link>
            </Typography>
            {/* Responsive Navigation Items */}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <Typography sx={{ display: "block", py: 0.9, fontSize: 14 }} className="Quicksand">
                English
              </Typography>
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
                  }}
                  className="Quicksand"
                >
                  <img src={item} alt="User" style={{ objectFit: "contain" }} />
                </Box>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Typography sx={{ display: "block", py: 0.9, fontSize: 14 }} className="Quicksand">
                English
              </Typography>
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
                  }}
                  className="Quicksand"
                >
                  {/* {item} */}
                  
                  <img src={item} alt="User" style={{ objectFit: "contain" }} />
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
  window: PropTypes.func,
};

export default Headers;
