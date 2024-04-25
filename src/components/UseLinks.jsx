import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Quiz from "../assets/img/quiz-mygov.png";
import Ca from "../assets/img/ca.png.png"
import MyGovBlog from "../assets/img/mygov-blog.png.png"
import MyGovInv from "../assets/img/mygov-innovation.png.png"
import Pledge from "../assets/img/pledge.png.png"
import Self from "../assets/img/self4society.png.png"
import Swacch from "../assets/img/swachh-bharat.png.png"
import TransformIndia from "../assets/img/transforming-india.png.png"
import { Link, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Data = [
  {
    img: Quiz,
    text: "MyGov Quiz",
  },
  {
    img: TransformIndia,
    text: "Transforming India",
  },
  {
    img: MyGovInv,
    text: "MyGov Innovation",
  },
  {
    img: Pledge,
    text: "MyGov Pledge",
  },
  {
    img: MyGovBlog,
    text: "MyGov Blog",
  },
  {
    img: Swacch,
    text: "Swachh Bharat",
  },
  {
    img: Self,
    text: "Self4Society",
  },
  {
    img: Ca,
    text: "Campus Program",
  },
];

const Cards = ({ props }) => {
  return (
    <>
      {props.map((e, index) => (
        <Grid item xs={6} key={index}>
          <Item sx={{ display: "flex", gap: 1, height:'50px' }}>
            <img src={e.img} alt={e.text} />
            <Typography
              sx={{
                fontSize: "11.9px",
                fontWeight: "Regular",
                display: "flex",
                margin: "auto 0",
              }}
            >
              <Link href="#" sx={{color:'#000', cursor:"pointer", textDecoration:"none"}}>{e.text}</Link>
            </Typography>
          </Item>
        </Grid>
      ))}
    </>
  );
};

export default function UseLinks() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {<Cards props={Data} />}
      </Grid>
    </Box>
  );
}
