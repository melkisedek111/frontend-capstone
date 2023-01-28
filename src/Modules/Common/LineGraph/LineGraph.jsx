import React from "react";
import {
	GraphDetails,
	GraphHeader,
	GraphHeaderTitle,
	LineGraphContainer,
	LineGraphSection,
} from "./lineGraph.styled.jsx";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
const LineGraph = () => {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];
	return (
		<LineGraphSection>
			<LineGraphContainer>
				<GraphHeader>
					<GraphHeaderTitle>
						<h4>Support Request</h4>
						<CustomDropdown
							isSelected={true}
							size="small"
							menuItems={[{ value: 1, label: "Weekly" }]}
						/>
					</GraphHeaderTitle>
					<GraphDetails>
						<div>
							<Diversity3Icon color="success" />
							<h5>Finished Requests</h5>
						</div>
						<div>
							<PendingActionsIcon color="error" />
							<h5>Pending Requests</h5>
						</div>
					</GraphDetails>
				</GraphHeader>
				<div style={{height: "270px"}}>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							style={{ margin: "0 auto" }}
							width={500}
							height={270}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								type="monotone"
								dataKey="pv"
								stroke="#8884d8"
								activeDot={{ r: 8 }}
							/>
							<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</LineGraphContainer>
		</LineGraphSection>
	);
};

export default LineGraph;
