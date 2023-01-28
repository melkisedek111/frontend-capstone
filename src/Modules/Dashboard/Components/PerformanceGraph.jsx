import React from "react";
import {
	PerformanceGraphContainer,
	PerformanceGraphHeader,
	PerformanceGraphSection,
} from "./performanceGraph.styled.jsx";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import CustomDropdown from "../../Common/CustomDropdown/CustomDropdown.jsx";

const PerformanceGraph = () => {
	const data = [
		{
			name: "MIS",
			uv: 4000,
			pv: 2400,
			amt: 2400,
			tv: 100,
		},
		{
			name: "CICT",
			uv: 3000,
			pv: 1398,
			amt: 2210,
			tv: 100,
		},
		{
			name: "CAS",
			uv: 2000,
			pv: 9800,
			amt: 2290,
			tv: 100,
		},
		{
			name: "DIT",
			uv: 2780,
			pv: 3908,
			amt: 2000,
			tv: 100,
		},
		{
			name: "COE",
			uv: 1890,
			pv: 4800,
			amt: 2181,
			tv: 100,
		},
		{
			name: "COED",
			uv: 2390,
			pv: 3800,
			amt: 2500,
			tv: 100,
		},
	];
	return (
		<PerformanceGraphSection>
			<PerformanceGraphContainer>
				<PerformanceGraphHeader>
					<h4>Support Requests by Departments</h4>
					<CustomDropdown
						isSelected={true}
						size="small"
						menuItems={[{ value: 1, label: "Weekly" }]}
					/>
				</PerformanceGraphHeader>
				<div style={{height: 300}}>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							width={1000}
							height={250}
							data={data}
							margin={{
								top: 20,
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
							<Bar dataKey="pv" stackId="a" fill="#8884d8" />
							<Bar dataKey="amt" stackId="a" fill="#82ca9d" />
							<Bar dataKey="uv" stackId="a" fill="#ffc658" />
							<Bar dataKey="tv" stackId="a" fill="#039120" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</PerformanceGraphContainer>
		</PerformanceGraphSection>
	);
};

export default PerformanceGraph;
