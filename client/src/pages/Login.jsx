import {
	Avatar,
	Button,
	Container,
	IconButton,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation,  useStrongPassword } from "6pp";  //for validation
import { usernameValidator } from "../utils/validator";

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const toggleLogin = () => setIsLogin((prev) => !prev);
	const name = useInputValidation("");
	const bio = useInputValidation("");
	const username = useInputValidation("", usernameValidator); //created custom validtor in utils
	const password = useStrongPassword();

	return (
		<Container
			component={"main"}
			maxWidth='xs'
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Paper
				elevation={3}
				sx={{
					padding: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{isLogin ? (
					<>
						<Typography variant='h5'>LogIn</Typography>
						<form
							style={{
								width: "100%",
								marginTop: "1rem",
							}}
						>
							<TextField
								required
								fullWidth
								label='Username'
								margin='normal'
								variant='outlined'
								value={username.value}
								onChange={username.changeHandler}
							/>

							<TextField
								required
								fullWidth
								label='Password'
								type='password'
								margin='normal'
								variant='outlined'
								value={password.value}
								onChange={password.changeHandler}
							/>
							<Button
								sx={{
									marginTop: "1rem",
								}}
								variant='contained'
								color='primary'
								type='submit'
								fullWidth
							>
								Login
							</Button>

							<Typography textAlign={"center"} m={"1rem"}>
								Or
							</Typography>

							<Button fullWidth variant='text' onClick={toggleLogin}>
								Sign Up Instead
							</Button>
						</form>
					</>
				) : (
					<>
						<Typography variant='h5'>SignUp</Typography>
						<form
							style={{
								width: "100%",
								marginTop: "1rem",
							}}
						>
							<Stack position={"relative"} width={"10rem"} margin={"auto"}>
								<Avatar
									sx={{
										width: "10rem",
										height: "10rem",
										objectFit: "contain",
									}}
								/>

								<IconButton
									sx={{
										position: "absolute",
										bottom: "0",
										right: "0",
										color: "white",
										bgcolor: "rgba(0,0,0,0.5)",
										":hover": {
											bgcolor: "rgba(0,0,0,0.7)",
										},
									}}
									component='label'
								>
									<>
										<CameraAltIcon />
										<VisuallyHiddenInput type='file' />
									</>
								</IconButton>
							</Stack>
							<TextField
								required
								fullWidth
								label='Name'
								margin='normal'
								variant='outlined'
								value={name.value}
								onChange={name.changeHandler}
							/>
							<TextField
								required
								fullWidth
								label='Bio'
								margin='normal'
								variant='outlined'
								value={bio.value}
								onChange={bio.changeHandler}
							/>
							<TextField
								required
								fullWidth
								label='Username'
								margin='normal'
								variant='outlined'
								value={username.value}
								onChange={username.changeHandler}
							/>

                                {/*using pp library to check refer to (utils validatpr)*/}
							{
                                username.error && (
								<Typography variant='caption' color='error'>
									{" "}
									{username.error}{" "}
								</Typography>
							)}

							<TextField
								required
								fullWidth
								label='Password'
								type='password'
								margin='normal'
								variant='outlined'
								value={password.value}
								onChange={password.changeHandler}
							/>

                            {/* stronng password using strongPasswrod  component */}
                            {
                                password.error && (
								<Typography variant='caption' color='error'>
									{" "}
									{password.error}{" "}
								</Typography>
							)}


							<Button
								sx={{
									marginTop: "1rem",
								}}
								variant='contained'
								color='primary'
								type='submit'
								fullWidth
							>
								SignUp
							</Button>

							<Typography textAlign={"center"} m={"1rem"}>
								Or
							</Typography>

							<Button fullWidth variant='text' onClick={toggleLogin}>
								Log In Instead
							</Button>
						</form>
					</>
				)}
			</Paper>
		</Container>
	);
};

export default Login;
