import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password 
      // !formData.confirmPassword
    ) {
      return setErrorMessage("All fields are required.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setErrorMessage(data.message || "Signup failed. Please try again.");
      }

      // Navigate to sign-in page on success
      navigate("/Signin");
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Box
      mt={12}
      mb={5}
      sx={{
        pt: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: "linear-gradient(to top left, cyan, green)",
          p: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={3}
          sx={{ textShadow: "0px 2px 4px rgba(0,0,0,0.6)" }}
        >
          SIGN UP
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="name"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Name
          </Typography>
          <TextField
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>

        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="email"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Email
          </Typography>
          <TextField
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>

        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="password"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Password
          </Typography>
          <TextField
            id="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>

        <Box mb={3}>
          <Typography
            component="label"
            htmlFor="confirmPassword"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Confirm Password
          </Typography>
          <TextField
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          disabled={loading}
          sx={{
            backgroundColor: "#1e88e5",
            color: "white",
            fontWeight: "bold",
            py: 1,
            borderRadius: 1,
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Sign Up"}
        </Button>

        <Divider sx={{ my: 3, backgroundColor: "rgba(255,255,255,0.5)" }} />

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "black", mt: 2 }}
        >
          Already User?{" "}
          <Link
            to="/Signin"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Login Now
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;
