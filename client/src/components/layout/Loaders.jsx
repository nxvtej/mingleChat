/* eslint-disable no-unused-vars */
import React from "react";
import { Grid, Skeleton } from "@mui/material";
export const LayoutLoader = () => {
	return (
		<Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
			<Grid
				item
				sm={4}
				md={3}
				sx={{
					display: { xs: "none", sm: "block" },
				}}
				height={"100%"}
			>
				<Skeleton variant='rectangular' height={"100vh"} />
			</Grid>

			<Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
				{Array.from({ length: 10 }).map((_, index) => (
					<Skeleton key={index} variant='rectangular' height={"10rem"} />
				))}
			</Grid>

			<Grid
				item
				md={4}
				lg={3}
				sx={{
					display: { xs: "none", sm: "block" },
					padding: "2rem",
					bgcolor: "rgba(0,0,0,0.5)",
				}}
				height={"100%"}
			>
				<Skeleton variant='rectangular' height={"100vh"} />
			</Grid>
		</Grid>
	);
};
