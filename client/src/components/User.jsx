import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

function User() {
  const password = "Sachin@123";
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={12}>
          <Stack direction="row" sx={{justifyContent:'space-between'}}>
            <Typography variant="heading1">Name</Typography>
            <Typography variant="subtitle1">Sachin Kumar</Typography>
          </Stack>
          <Stack direction="row" sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant="heading1">Email</Typography>
            <Typography variant="subtitle1">sachinmail@gmail.com</Typography>
          </Stack>
          <Stack direction="row" sx={{justifyContent:'space-between'}}>
            <Typography variant="heading1">Password</Typography>
            <Typography variant="subtitle1">mypass@123</Typography>
          </Stack>
          <Stack direction="row" sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="heading1">LifeTime Earning</Typography>
            <Typography variant="subtitle1">500</Typography>
          </Stack>
          <Stack direction="row" sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="heading1">Balance</Typography>
            <Typography variant="subtitle1">200</Typography>
          </Stack>
          <Stack direction="row" sx={{justifyContent:'left'}}>
              <Button variant="contained" >Update Profile</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default User;
