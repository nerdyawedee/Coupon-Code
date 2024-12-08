import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper, Divider } from "@mui/material";
import OAuth from "./OAuth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill in all fields.");
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setErrorMessage(data.message || "Login failed.");
      }

      // Save token to localStorage (or other preferred storage)
      localStorage.setItem("token", data.token);

      // Redirect to dashboard or homepage
      navigate("/home");
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      mt={5}
      mb={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        pt: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          background: "linear-gradient(to top left, #00bcd4, #4caf50)",
          p: 3,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#fff",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          LOGIN
        </Typography>
        {errorMessage && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ mb: 2 }}
          >
            {errorMessage}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box mb={2}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: "#fff", mb: 1 }}
            >
              Email
            </Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { backgroundColor: "#fff", borderRadius: 8 },
              }}
            />
          </Box>
          <Box mb={3}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: "#fff", mb: 1 }}
            >
              Password
            </Typography>
            <TextField
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { backgroundColor: "#fff", borderRadius: 8 },
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{
              height: 40,
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
        <br/>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{
              height: 40,
              background: 'linear-gradient(to right, #FF4081, #FF5722)',
        '&:hover': {
          background: 'linear-gradient(to right, #F50057, #FF3D00)',
        },
            }}
          >
        <OAuth/></Button>
        <Divider sx={{ my: 3, backgroundColor: "#fff" }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#000", mt: 2 }}
        >
          New to CouponDeal?{" "}
          <Link
            to="/signup"
            style={{
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Sign Up Now
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
