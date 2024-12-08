import Grid from '@mui/material/Grid';
import { Typography, Stack, Paper, Button } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

function Orders(){

    return(
        <>
         <Grid container>
            <Grid item md={12}>
                {/* cart items */}
               <Stack sx={{height:'50vh', overflow:'scroll',scrollBehavior:'smooth'}} spacing={2}>
                 <Typography variant="subtitle2" 
                 sx={{position:'sticky', top:'0',padding:'10px',backgroundColor:'#b2babb',zIndex:'12'}}>Favourite</Typography>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="secondary">Continue</Button>
                 </Paper>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="secondary">Continue</Button>
                 </Paper>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="secondary">Continue</Button>
                 </Paper>
               </Stack>

               {/* purchased item */}
               <Stack sx={{height:'50vh', overflow:'scroll',marginTop:'20px'}} spacing={2}>
                 <Typography variant="subtitle2" 
                 sx={{position:'sticky', top:'0',padding:'10px',backgroundColor:'#b2babb',zIndex:'12'}}>Purchased</Typography>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="info">Details</Button>
                 </Paper>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="secondary">Details</Button>
                 </Paper>
                 <Paper elevation={5} sx={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
                    <Typography variant="subtitle1">Google Play Coupon</Typography>
                    <Typography variant="subtitle1">50%</Typography>
                    <Button variant="contained" color="secondary">Details</Button>
                 </Paper>
               </Stack>
            </Grid>
         </Grid>
          
        </>
    )
}

export default Orders;