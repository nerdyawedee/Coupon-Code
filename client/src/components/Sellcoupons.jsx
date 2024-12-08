import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import { TextField, Button, Box } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import StoreIcon from "@mui/icons-material/Store";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const CustomButton = styled(Button)(({ theme }) => ({
  border: "2px solid red",
  padding: "5px",
  borderRadius: "5px",
  textAlign: "center",
  "&:active": { backgroundColor: "red" },
}));

const CustomInput = styled("input")(({ theme }) => ({
  display: "none",
}));

function Sellcoupons() {
  const refs = useRef();
  useEffect(() => {
    refs.current.classList.add("page");
  }, []);
  return (
    <>
      <Grid
        mt={15}
        mb={10}
        ref={refs}
        container
        sx={{ justifyContent: "center" }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          md={5}
        >
          <Paper elevation={5} sx={{padding:'15px'}}>
            <Typography variant="h6">Add Coupon</Typography>
            <form target="_blank">
              <Stack spacing={1}>
                <Box component="label" htmlFor="company">
                  {" "}
                  Enter Company Name
                </Box>
                <TextField
                  id="company"
                  autoFocus
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <StoreIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
                <Box htmlFor="desc" component="label">
                  Enter Description
                </Box>
                <TextField
                  type="text"
                  id="desc"
                  variant="outlined"
                  autoComplete="on"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                    inputProps: {
                      maxLength: 10,
                    },
                  }}
                />
                <Box htmlFor="price" component="label">
                  Enter Price
                </Box>
                <TextField
                  id="price"
                  name="price"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupeeIcon />
                      </InputAdornment>
                    ),
                    inputProps: {
                      min: 10,
                      max: 1000,
                      step: 10,
                    },
                  }}
                />
                <Box component="label" htmlFor="coupon">
                  Enter Coupon Code
                </Box>
                <TextField
                  id="coupon"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CardGiftcardIcon />
                      </InputAdornment>
                    ),
                    inputProps: {
                      maxLength: 50,
                    },
                  }}
                />
                <Box component="label" htmlFor="file">
                  Choose Picture
                </Box>
                <CustomButton
                  component="label"
                  htmlFor="file"
                  startIcon={<UploadFileIcon />}
                >
                  Upload
                </CustomButton>
                <CustomInput
                  name="file"
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />

                <Button variant="contained" type="Submit">
                  Sell Now
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Sellcoupons;
