import "../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner1 from "../assets/banner1.png";
import Stack from "@mui/material/Stack";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useRef} from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function CouponCard() {
  return (
    <>
      <Paper className="card" elevation={5}>
        <Card  sx={{ maxWidth: 200 }}>
          <CardMedia
            loading="lazy"
            component="img"
            alt="green iguana"
            height="100"
            image={Banner1}
          />
          <CardContent>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography>Play Store</Typography>
              <IconButton>
                <LockIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Google Developer Coupon
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Shop Now
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
}
