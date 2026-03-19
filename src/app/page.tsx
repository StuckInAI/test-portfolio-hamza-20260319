import MetricsCards from '@/components/MetricsCards'
import RecentActivityTable from '@/components/RecentActivityTable'
import ChartComponent from '@/components/ChartComponent'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid gap-6 mb-6">
        <MetricsCards />
        <ChartComponent />
      </div>
      <RecentActivityTable />
    </div>
  )
}