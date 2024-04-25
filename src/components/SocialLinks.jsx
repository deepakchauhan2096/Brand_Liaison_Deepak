import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import fb from "../assets/img/fb.png";
import ins from "../assets/img/in.png";
import li from "../assets/img/li.png";
import msg from "../assets/img/msg.png";
import wp from "../assets/img/wp.png";
import yt from "../assets/img/yt.png";
import tw from "../assets/img/tw.png";

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
    img: tw,
    text: "MyGov Quiz",
  },
  {
    img: fb,
    text: "Transforming India",
  },
  {
    img: yt,
    text: "MyGov Innovation",
  },
  {
    img: ins,
    text: "MyGov Pledge",
  },
  {
    img: wp,
    text: "MyGov Blog",
  },
  {
    img: li,
    text: "Swachh Bharat",
  },
  {
    img: msg,
    text: "Self4Society",
  },
];

const Links = ({ props }) => {
  return (
    <>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", gap: 3, height: "50px" }}>
          <Typography
            sx={{
              fontSize: "13.1px",
              fontWeight: "Regular",
              display: "flex",
              margin: "auto 0",
              color: "#fff",
              paddingRight:"15px"
            }}
          >
            FOLLOW US
          </Typography>
          {props.map((e, index) => (
            <img key={index} src={e.img} alt={e.text} />
          ))}
        </Item>
      </Grid>
    </>
  );
};

export default function SocialLinks() {
  return (
    <Box sx={{ flexGrow: 1, mb:"60px" }}>
      <Grid container spacing={2}>
        {<Links props={Data} />}
      </Grid>
    </Box>
  );
}
