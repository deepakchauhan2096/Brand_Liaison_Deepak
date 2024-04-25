import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NicImg from "../assets/img/nic_logo.png.png";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:"none"
}));

export default function Nic() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: { xs: "50px", sm: "50px", md: "60px", lg: "197px" },}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", gap: 3, height: "50px" }}>
          <img src={NicImg} alt={"nic"} />
          <Typography
            sx={{
              fontSize: "13.1px",
              fontWeight: "Regular",
              display: "flex",
              margin: "auto 0",
              color: "#fff",
              paddingRight: "15px",
              textAlign:"justify"
            }}
          >
            © Content owned, updated and maintained by the MyGov Cell. MyGov
            platform is designed, developed and hosted by National Informatics
            Centre and this website belongs to MyGov, Ministry of Electronics &
            Information Technology, Government of India.
          </Typography>
        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
