/* eslint-disable react/display-name */
import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrapperComponent) => {
	return (props) => {
		return (
			<>
				<Title />
				<Header />
				{/* 4rem is header   */}

				<Grid container height={"calc(100vh - 4rem)"}>
					<Grid
						item
						sm={4}
						md={3}
						sx={{
							display: { xs: "none", sm: "block" },
						}}
						height={"100%"}
					>
						first
					</Grid>

					<Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
						<WrapperComponent {...props} />
					</Grid>

					<Grid
						item
						md={4}
						lg={3}
						sx={{
							display: { xs: "none", sm: "block" },
							padding: "2rem",
							bgcolor: "rgba(0,0,0,0.85)",
						}}
						height={"100%"}
					>
						third
					</Grid>
				</Grid>

				<div>footer</div>
			</>
		);
	};
};

export default AppLayout;

/*

import React from 'react';
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from '@mui/material';

const AppLayout = (WrapperComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />

                <Grid container height={"calc(100vh - 4rem"}>
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main"></Grid>
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main"></Grid>
                    <Grid item xs={} height={"100%"} bgcolor="primary.main"></Grid>
                </Grid>
                <WrapperComponent {...props} />
            </>
        );
    };
};

export default AppLayout;

*/
