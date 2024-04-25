import React from "react";
import { Typography, Button, Box } from "@mui/material";
import bg from "../assets/img/Herobg.png";
import SearchBar from "./Searchbar";

function Heros() {
  return (
    <Box
      maxWidth="fixed"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "451px",
        backgroundImage: `Url(${bg})`,
        marginBottom: "53px",
      }}
    >
      <div>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "108px",
            fontFamily: "Arial",
            color: "white",
            textAlign: "center",
          }}
        >
          FAQ
        </Typography>
        <SearchBar />
      </div>
    </Box>
  );
}

export default Heros;
