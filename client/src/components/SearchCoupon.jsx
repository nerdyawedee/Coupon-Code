import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const SearchCoupon = () => {
  // Slider setting
  const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  // Slider Settings

  // Popover settings
  const [anchorEl, setAnchorEl] = useState(null);

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const options = [
    { label: "Amazon", id: 1 },
    { label: "Zomato", id: 2 },
    { label: "Red Bus", id: 3 },
    { label: "Skull candy", id: 4 },
    { label: "Boat electronics", id: 5 },
    { label: "Google", id: 6 },
    { label: "Latest Coupons", id: 7 },
    { label: "High discount coupons", id: 8 },
  ];
  return (
    <>
      <Grid
        container
        mt={10}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={8}>
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label} // For object options
            renderInput={(params) => (
              <TextField {...params} label="Search for Coupons" />
            )}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={handleClick}>
            <FilterAltIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack direction="row" spacing={2} p={3}>
              <Typography>Discount</Typography>
              <Slider
                sx={{ width: "150px"}}
                value={typeof value === "number" ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 100,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Stack>
          </Popover>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchCoupon;
