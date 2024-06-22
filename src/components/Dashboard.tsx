
import DashboardStatsGrid from './DashBoardStatsGrid'
import TransactionChart from './TransactionChart'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
			<TransactionChart />
			</div>
		</div>
	)
}
