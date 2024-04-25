import { Box, Link, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import ArrowLeft from "../assets/icon/ArrowLeft.svg";

const Breadcrump = () => {
  return (
    <Container fixed sx={{ paddingTop: "170px" }}>
      <Box sx={{ background: "", px: "24px" }}>
        <Typography
          sx={{ color: "black", fontSize: "20px", fontFamily: "Roboto" }}
        >
          <Link href="" className="anchor Quicksand">
            <img src={ArrowLeft} alt="ArrowLeft" /> Back
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: "48px",
          }}
        >
          <Link href="" className="anchor">
            <span style={{fontFamily: "Roboto", fontWeight:"300"}}>MyGov</span><strong> - FAQ</strong>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Breadcrump;
