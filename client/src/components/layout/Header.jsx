import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";
import {
	Add as AddIcon,
	Menu as MenuIcon,
	Search as SearchIcon,
	Group as GroupIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleMobile = () => {
		console.log("mobile");
	};

	const openSearchDialog = () => {
		console.log("search pressed");
	};

	const openNewGroup = () => {
		console.log("this creates new group");
	};

	const navigatToGroup = () => navigate("/groups");

	return (
		<>
			<Box sx={{ flexGrow: 1 }} height={"4rem"}>
				<AppBar
					position='static'
					sx={{
						bgcolor: orange,
					}}
				>
					<Toolbar>
						<Typography
							variant='h6'
							sx={{
								display: { xs: "none", sm: "block" },
							}}
						>
							mingleChat
						</Typography>
						<Box
							sx={{
								display: { xs: "block", sm: "none" },
							}}
						>
							<IconButton color='inherit' onClick={handleMobile}>
								<MenuIcon></MenuIcon>
							</IconButton>
						</Box>
						{/* just to get spae covered from between */}
						<Box
							sx={{
								flexGrow: 1,
							}}
						/>
						<Box>
							<Tooltip title='search'>
								<IconButton
									color='inherit'
									size='large'
									onClick={openSearchDialog}
								>
									<SearchIcon />
								</IconButton>
							</Tooltip>

							<Tooltip title='New Group'>
								<IconButton color='inherit' size='large' onClick={openNewGroup}>
									<AddIcon />
								</IconButton>
							</Tooltip>

							<Tooltip title='Manage Groups'>
								<IconButton
									color='inherit'
									size='large'
									onClick={navigatToGroup}
								>
									<GroupIcon />
								</IconButton>
							</Tooltip>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

// instead of writing samme thing so many times creating a components for that
// const IconBtn = ({})
export default Header;
