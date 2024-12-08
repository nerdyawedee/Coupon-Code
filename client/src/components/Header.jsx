import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../App.css";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2e4053',
  borderRadius: '2em'
}));

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useRef();
  let lastPos = 0;
  const history = useNavigate();

  useEffect(() => {
    // Check the login state when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists in localStorage, mark user as logged in
    }

    const handleScroll = () => {
      const currPos = document.documentElement.scrollTop;
      const ele = nav.current;

      if (ele) { // Ensure ele is defined
        currPos > lastPos
          ? ele.classList.add("navmove")
          : ele.classList.remove("navmove");
        lastPos = currPos <= 0 ? 0 : currPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push("/"); // Redirect to homepage or login page
  };

  return (
    <>
      <CssBaseline />
      <Grid
        ref={nav}
        id="nav"
        container
        sx={{
          background: "linear-gradient(to bottom,#48c9b0,#117864)",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0px",
          zIndex: 99,
          boxShadow: "0px 2px 5px",
        }}
      >
        <Grid
          padding={1}
          container
          sx={{
            background: "linear-gradient(to bottom,#b2babb,#515a5a)",
            justifyContent: "space-between",
            color: "white",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Typography className="btn" variant="subtitle1">
              couponDeal
            </Typography>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            <Link className="btn" to="/">
              Home
            </Link>
            <Link className="btn" to="/Sell">
              Coupons
            </Link>
            <Typography className="btn">Earn</Typography>
            <Typography className="btn">About Us</Typography>
          </Grid>
          <Grid item xs={{ display: "flex" }}>
            {!isLoggedIn ? (
              <Link to="Signup">
                <CustomButton variant="contained" disableRipple>
                  Signup
                </CustomButton>
              </Link>
            ) : (
              <Button variant="contained" disableRipple onClick={handleSignOut}>
                Signout
              </Button>
            )}
            <Link to="Account">
              <IconButton>
                <PersonIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
