import { Box, Container, Divider, Link, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import UseLinks from "./UseLinks";
import SocialLinks from "./SocialLinks";
import Clients from "./Clients";
import Nic from "./Nic";
import Barcode from "./Barcode";

const Footer = ({ footerItem }) => {
  return (
    <Box
      maxWidth="fixed"
      sx={{
        marginTop: "78px",
        paddingTop: "100px",
        position: "relative",
        background: "#2E2E2E",
      }}
    >
      <Container fixed>
        <Box sx={{ px: "24px" }}>
          <Grid container spacing={2}>
            <Grid item xs={7} sm={12} md={12} lg={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Typography sx={{ color: "white", fontSize: "18px" }}>
                    Activites
                  </Typography>
                  {footerItem[0].Activites.map((e, index) => (
                    <Typography
                      key={index}
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      <Link
                        href="#"
                        sx={{
                          color: "#fff",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        {e}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Typography sx={{ color: "white", fontSize: "18px" }}>
                    Get to Know
                  </Typography>
                  {footerItem[0].GetToKnow.map((e, index) => (
                    <Typography
                      key={index}
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      <Link
                        href="#"
                        sx={{
                          color: "#fff",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        {e}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Typography sx={{ color: "white", fontSize: "18px" }}>
                    Help & Support
                  </Typography>
                  {footerItem[0].Help.map((e, index) => (
                    <Typography
                     key={index}
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      <Link
                        href="#"
                        sx={{
                          color: "#fff",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        {e}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Typography sx={{ color: "white", fontSize: "18px", pb: 1 }}>
                Useful Links
              </Typography>
              <UseLinks />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container fixed>
        <Box sx={{ background: "", px: "24px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Divider
                style={{ float: "left" }}
                sx={{
                  bgcolor: "#fff",
                  my: { xs: "30px", sm: "30px", md: "30px", lg: "" },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "95%" },
                }}
              />
              <SocialLinks />
              <Clients />
              <Nic />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <Barcode />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
