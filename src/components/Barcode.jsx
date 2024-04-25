import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Small from "../assets/img/small.png";
import { Typography } from "@mui/material";
import Appstore from "../assets/img/app_store.svg.png";
import Playstore from "../assets/img/play_store.svg.png";


export default function Barcode() {
  return (
    <Box
      maxWidth={"fixed"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        height: "273.5px",
        background: "#A6A6A6",
        my: 6,
      }}
    >
      <Grid>
        <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
          <img src={Small} alt="" height="100px" width="100px" />
        </Box>
        <Typography
          sx={{ textAlign: "center", fontSize: "16px", fontWeight: "Regular" }}
        >
          Download MyGov Mobile App
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "13px", fontWeight: "light" }}
        >
          And Continue to Contribute Towards Building a
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "13px", fontWeight: "light" }}
        >
          New India on the Move
        </Typography>
        <Box sx={{ display: "flex", gap: 3, p: "10px" }}>
          <img src={Appstore} alt={"appstore"} />
          <img src={Playstore} alt={"Playstore"} />
        </Box>
      </Grid>
    </Box>
  );
}
