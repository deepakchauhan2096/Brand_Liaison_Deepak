import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dititalindia from "../assets/img/digital-india-logo.png.png";
import indiaGov from "../assets/img/india-gov-logo.png.png"
import Meity from "../assets/img/Meity_logo.png.png";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:"none"
}));

const Data = [
  {
    img: dititalindia,
    text: "MyGov Quiz",
  },
  {
    img:indiaGov,
    text: "Transforming India",
  },
  {
    img: Meity,
    text: "MyGov Innovation",
  }
];

const ClientsLink = ({ props }) => {
  return (
    <>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", gap: 3, height: "50px" }}>
          {props.map((e, index) => (
            <img key={index} src={e.img} alt={e.text} />
          ))}
        </Item>
      </Grid>
    </>
  );
};

export default function Clients() {
  return (
    <Box sx={{ flexGrow: 1, mb:"46px" }}>
      <Grid container spacing={2}>
        {<ClientsLink props={Data} />}
      </Grid>
    </Box>
  );
}
