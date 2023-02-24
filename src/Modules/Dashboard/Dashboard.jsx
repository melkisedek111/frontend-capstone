import React, { useState, useEffect } from "react";
import CustomCard from "../Common/CustomCard/CustomCard.jsx";
import {
	CardsContainer,
	DashboardContainer,
	DashboardLowerSection,
	DashboardSection,
	DashboardUpperSection,
	GraphContainer,
	LeftSection,
	LeftUpperSection,
	RightSection,
} from "./dashboard.styled.jsx";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import LowPriorityRoundedIcon from "@mui/icons-material/LowPriorityRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import LineGraph from "../Common/LineGraph/LineGraph.jsx";
import CustomCalendar from "../Common/CustomCalendar/CustomCalendar.jsx";
import PerformanceGraph from "./Components/PerformanceGraph.jsx";
import RecentRequestCard from "./Components/RecentRequestCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";
import { Grid } from "@mui/material";

const Dashboard = () => {
	const [delayedPerformanceGraph, setDelayedPerformanceGraph] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!delayedPerformanceGraph) {
			setTimeout(() => setDelayedPerformanceGraph(true), 1000);
		}

		dispatch(setCurrentPage({ pageTitle: "Dashboard" }));
	}, []);
	return (
		<DashboardSection>
			<DashboardContainer>
				<Grid container spacing={2}>
					<Grid item xs={12} md={8} lg={8}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6} lg={3}>
								<CustomCard
									icon={<RecordVoiceOverRoundedIcon />}
									total="1,209"
									percentage="2.5%"
									label="Total Request"
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<CustomCard
									icon={<TaskRoundedIcon />}
									total="25"
									percentage="50%"
									label="Today's Task"
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<CustomCard
									icon={<LowPriorityRoundedIcon />}
									total="10"
									percentage="10%"
									label="Current Priority"
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<CustomCard
									icon={<BookmarkAddedRoundedIcon />}
									total="120"
									percentage="90%"
									label="Total Approved"
								/>
							</Grid>
							<Grid item xs={12}>
								<GraphContainer>
									<LineGraph />
								</GraphContainer>
							</Grid>
							<Grid item xs={12}>
								<PerformanceGraph />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<CustomCalendar />
						<RecentRequestCard />
					</Grid>
				</Grid>
				{/* <LeftSection>
					<LeftUpperSection>
						<CardsContainer>
							<CustomCard
								icon={<RecordVoiceOverRoundedIcon />}
								total="1,209"
								percentage="2.5%"
								label="Total Request"
							/>
							<CustomCard
								icon={<TaskRoundedIcon />}
								total="25"
								percentage="50%"
								label="Today's Task"
							/>
							<CustomCard
								icon={<LowPriorityRoundedIcon />}
								total="10"
								percentage="10%"
								label="Current Priority"
							/>
							<CustomCard
								icon={<BookmarkAddedRoundedIcon />}
								total="120"
								percentage="90%"
								label="Total Approved"
							/>
						</CardsContainer>
						<GraphContainer>
							<LineGraph />
						</GraphContainer>
					</LeftUpperSection>
					<PerformanceGraph />
				</LeftSection>
				<RightSection>
					<CustomCalendar />
					<RecentRequestCard />
				</RightSection> */}
			</DashboardContainer>
		</DashboardSection>
	);
};

export default Dashboard;
