import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const Bottom = () =>{
    return(
        <>
            <Grid container md={12} 
            sx={{background: "linear-gradient(to bottom,#b2babb,#515a5a)",
             justifyContent:'center',border:'10px groove #b2babb'}}>
                <Grid item xs={12} sm={3} md={2} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="subtitle">Create Coupon</Typography>
                    <Typography variant="subtitle">Sell Coupon</Typography>
                    <Typography variant="subtitle">Buy Coupon</Typography>
                    <Typography variant="subtitle">Promote Coupon</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="subtitle">Create Coupon</Typography>
                    <Typography variant="subtitle">Sell Coupon</Typography>
                    <Typography variant="subtitle">Buy Coupon</Typography>
                    <Typography variant="subtitle">Promote Coupon</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="subtitle">Create Coupon</Typography>
                    <Typography variant="subtitle">Sell Coupon</Typography>
                    <Typography variant="subtitle">Buy Coupon</Typography>
                    <Typography variant="subtitle">Promote Coupon</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="subtitle">Create Coupon</Typography>
                    <Typography variant="subtitle">Sell Coupon</Typography>
                    <Typography variant="subtitle">Buy Coupon</Typography>
                    <Typography variant="subtitle">Promote Coupon</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Bottom;