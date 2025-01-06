import React, { useState } from 'react';
import { material } from '../../library/material';
// import './Login.css'
import { useForm } from 'react-hook-form';
// import { Navigate, useNavigate } from 'react-router';
// import image from '../../assets/PRAEFERRE-Logo_Black.png';
import { height } from '@mui/system';
import logo from '../../assets/logo.png';
import image from '../../assets/PRAEFERRE-Logo_Black.png'
import { Box, TextField, Button, InputAdornment, Avatar, Typography } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
// import Grid2 from '@mui/material/Unstable_Grid2'; // For MUI v5
// import Grid2 from '@mui/material';
import Grid from '@mui/material/Grid2';



function Login() {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm();
    const [type, setType] = useState("password");
    const [isVisible, setIsVisible] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    // const Navigate = useNavigate();

    function showPassword() {
        setIsVisible(!isVisible);
        setType("text");
    };

    function hidePassword() {
        setIsVisible(!isVisible);
        setType("password");
    };

    const login = (data) => {
        console.log(data);
    };



    return (
        <div className="row m-0" style={{ overflow: "hidden" }}>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <img
                    src={image}
                    alt="Illustration"
                    style={{
                        width: "100%",
                        height: "calc(100vh - 32px)",
                        // objectFit:'contain',
                        padding: "16px",
                    }}
                />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div
                    className="paperstyle"
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        padding: "16px",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                    }}
                >
                    <div className="d-flex justify-content-center mb-3 mt-2">
                        <Avatar
                            alt="Logo"
                            src={logo}
                            style={{ width: "90px", height: "90px", borderRadius: "50%" }}
                        />
                    </div>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <Box component="form" onSubmit={login}>
                        <TextField
                            onChange={(e) => setUserId(e.target.value)}
                            label="User Name"
                            variant="standard"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ style: { color: '#030303' } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="Password"
                            type={type}
                            variant="standard"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                            InputLabelProps={{ style: { color: '#030303' } }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {isVisible ? (
                                            <VisibilityOff
                                                onClick={hidePassword}
                                                color="primary"
                                                style={{ cursor: "pointer" }}
                                            />
                                        ) : (
                                            <Visibility
                                                onClick={showPassword}
                                                color="primary"
                                                style={{ cursor: "pointer" }}
                                            />
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{
                                marginTop: "16px",
                                backgroundColor: '#849aec',
                                '&:hover': { backgroundColor: '#044981' },
                            }}
                            disabled={userId === "" || password === ""}
                        >
                            Login
                        </Button>
                    </Box>
                    <Typography
                        align="center"
                        style={{
                            marginTop: "16px",
                            color: "blue",
                            cursor: "pointer",
                        }}
                    >
                        Forgot Password?
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Login;
