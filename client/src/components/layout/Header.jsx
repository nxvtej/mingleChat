/* eslint-disable no-unused-vars */
import {
	AppBar,
	Box,
	Icon,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { orange } from "../../constants/color";
import {
	Add as AddIcon,
	Menu as MenuIcon,
	Search as SearchIcon,
	Group as GroupIcon,
	Logout as LogoutIcon,
	Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
	/*
creating dummy states while coding frontend
*/

	const [isMobile, setIsMobile] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [isNotification, setIsNotification] = useState(false);
	const [isNewGroup, setIsNewGroup] = useState(false);

	const navigate = useNavigate();

	const handleMobile = () => {
		console.log("mobile");
		setIsMobile((prev) => !prev);
	};

	const openSearch = () => {
		setIsSearch((prev) => !prev);
		console.log("search pressed");
	};

	const openNewGroup = () => {
		setIsNewGroup((prev) => !prev);
		console.log("this creates new group");
	};

	const openNotification = () => {
		setIsNotification((prev) => !prev);
		console.log("this creates new group");
	};

	const navigatToGroup = () => navigate("/groups");

	const logoutHandler = () => {};
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
							<IconBtn
								title='search'
								icon={<SearchIcon />}
								onClick={openSearch}
							/>
							<IconBtn
								title='New Group'
								icon={<AddIcon />}
								onClick={openNewGroup}
							/>
							<IconBtn
								title='Manage Group'
								icon={<GroupIcon />}
								onClick={navigatToGroup}
							/>

							<IconBtn
								title='Notifications'
								icon={<NotificationsIcon />}
								onClick={openNotification}
							/>

							<IconBtn
								title='Logout'
								icon={<LogoutIcon />}
								onClick={logoutHandler}
							/>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>

			{isSearch && (
				<Suspense fallback={<div>Loading...</div>}>
					<SearchDialog />
				</Suspense>
			)}

			{isNotification && (
				<Suspense fallback={<div>Loading...</div>}>
					<NotificationDialog />
				</Suspense>
			)}

			{isNewGroup && (
				<Suspense fallback={<div>Loading...</div>}>
					<NewGroupDialog />
				</Suspense>
			)}
		</>
	);
};

// instead of writing samme thing so many times creating a components for that
const IconBtn = ({ title, icon, onClick }) => {
	return (
		<Tooltip title={title}>
			<IconButton color='inherit' size='large' onClick={onClick}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};
export default Header;
