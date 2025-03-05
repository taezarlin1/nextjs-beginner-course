import Notifications from "./@notifications/page"
import RevenueMetrics from "./@revenue/page"
import UsersAnalytics from "./@users/page"

export default function ComplexDashboardLayout({children}:{
    children: React.ReactNode
}){
    return (
        <>
            <div>{children}</div>
            <UsersAnalytics/>
            <RevenueMetrics/>
            <Notifications/>
        </>
    )
}