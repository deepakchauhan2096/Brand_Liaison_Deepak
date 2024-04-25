import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
      //   label="Search Knowledge Base"

      placeholder="Search Knowledge Base"
      InputProps={{
        endAdornment: (
          <Box
            sx={{
              background: "#2AB998",
              color: "black",
              width: "92px",
              height: "74px",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              right: 0,
              top: "-9px",
            }}
          >
            <IconButton>
              <SearchIcon sx={{ color: "#fff", fontSize: "27px" }} />
            </IconButton>
          </Box>
        ),
      }}
      sx={{
        minWidth: { xs: "300px", sm: "400px",md:"500px",lg:"730px" },
        position: "relative",
        bgcolor: "#ffffff",
        height: "74px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        borderRadius:"10px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border:"none",
            borderColor: "green",
            height: "74px",
          },
        },
      }}
      fullWidth
    />
  );
};

export default SearchBar;
