import React, { useEffect, useState } from "react";
import styles from "./UserStatsCharts.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsCharts = ({ data }) => {
	const [chart, setChart] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const chartData = data.map((item) => {
			return {
				x: item.title,
				y: +item.acessos,
			};
		});
		setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b, 0));
		setChart(chartData);
	}, [data]);

	return (
		<section className={`${styles.chart} animeleft`}>
			<div className={`${styles.total} ${styles.chartItem}`}>
				<p>Acessos: {total}</p>
			</div>
			<div className={styles.chartItem}>
				<VictoryPie
					data={chart}
					innerRadius={50}
					padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
					style={{
						data: {
							fillOpacity: 0.9,
							stroke: "#fff",
							strokeWidth: 2,
						},
						labels: {
							fontSize: 14,
							fill: "#333",
						},
					}}
				/>
			</div>
			<div className={styles.chartItem}>
				<VictoryChart>
					<VictoryBar alignment='start' data={chart}></VictoryBar>
				</VictoryChart>
			</div>
		</section>
	);
};

export default UserStatsCharts;
