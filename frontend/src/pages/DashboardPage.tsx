import { RevenueCard } from '../components/dashboard/RevenueCard';
import { OrderTimeCard } from '../components/dashboard/OrderTimeCard';
import { RatingCard } from '../components/dashboard/RatingCard';
import { MostOrderedFood } from '../components/dashboard/MostOrderedFood';
import { OrderCard } from '../components/dashboard/OrderCard';

export function DashboardPage() {
  return (
    <div className="dashboard-grid">
      <RevenueCard />
      <OrderCard />
      <OrderTimeCard />
      <RatingCard />
      <MostOrderedFood />
    </div>
  );
}
