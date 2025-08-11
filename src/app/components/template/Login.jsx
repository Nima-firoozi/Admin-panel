// components/LoginFormMUI.jsx
"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  Stack,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Login,
  AutoFixHigh,
} from "@mui/icons-material";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "nima.k.firoozi.k@gmail.com" && password === "1234") {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push("/dashboard");
    } else {
      toast.error("Invalid credentials!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setEmail("");
      setPassword("");
      setError("Incorrect email or password");
    }
  };

  const autoFillCredentials = () => {
    setEmail("nima.k.firoozi.k@gmail.com");
    setPassword("1234");
    setError("");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/login.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        p: 2,
      }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          borderRadius: 2,
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(18px)",
          border: "3px solid rgba(255, 255, 255, 0.7)",
        }}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={autoFillCredentials}
          startIcon={<AutoFixHigh />}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            textTransform: "none",
          }}>
          Auto-fill
        </Button>

        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          fontWeight="bold">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Stack spacing={3}>
            {error && (
              <Alert severity="error" onClose={() => setError("")}>
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
              startIcon={<Login />}
              sx={{ py: 1.5 }}>
              Sign In
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            mt: 4,
            p: 2,
            bgcolor: "action.hover",
            borderRadius: 1,
            textAlign: "left",
          }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Test Credentials:
          </Typography>
          <Typography variant="body2">
            Email: <strong>nima.k.firoozi.k@gmail.com</strong>
          </Typography>
          <Typography variant="body2">
            Password: <strong>1234</strong>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
