import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import Accordions from "./Accordian";
import Sidebar from "../assets/img/Group 473.png";

const Content = ({contentItem}) => {
  return (
    <Container fixed sx={{ paddingTop: "53px 0", position: "relative" }}>
      <Box sx={{ px: "24px", boxSizing: "border-box" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Accordions AccordianData={contentItem} />
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                margin: "auto",
                width: "219px",
                height: "60px",
                mt: "92px",
                borderColor: "#EC7026",
                borderWidth: "2px",
                borderRadius: "52px",
                textTransform: "capitalize",
                fontSize: "24px",
                color: "#000",
              }}
            >
              View All
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            style={{ position: "relative" }}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            <Box sx={{ boxSizing: "border-box" }}>
              <img
                src={Sidebar}
                alt={""}
                style={{
                  position: "absolute",
                  top: 15,
                  width: "100%",
                  objectFit: "",
                  objectPosition: "right",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Content;
