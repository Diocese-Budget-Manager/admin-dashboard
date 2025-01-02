import { BarChart3, Users, DollarSign, Church } from 'lucide-react';
import DioceseCard from '../components/DioceseCard';
import ContributionChart from '../components/ContributionChart';
import { sampleDiocese } from '../utils/data';

const Dashboard = () => {
  // Mock data - replace with actual data from Supabase
  const stats = [
    {
      title: 'Total Dioceses',
      value: '32',
      icon: Church,
      change: '+2',
      changeType: 'increase',
    },
    {
      title: 'Total Contributions',
      value: '$2.4M',
      icon: DollarSign,
      change: '+15%',
      changeType: 'increase',
    },
    {
      title: 'Active Parishes',
      value: '1,284',
      icon: Users,
      change: '+124',
      changeType: 'increase',
    },
    {
      title: 'Avg. Contribution',
      value: '$75K',
      icon: BarChart3,
      change: '+8%',
      changeType: 'increase',
    },
  ];

  // const mockDiocese = {
  //   id: '1',
  //   name: 'Diocese of Springfield',
  //   location: 'Springfield, IL',
  //   bishop: 'Most Rev. John Smith',
  //   totalParishes: 124,
  //   monthlyContribution: 85000,
  //   yearlyBudget: 1000000,
  //   lastUpdated: '2024-03-10',
  // };

  const contributionData = [
    { month: 'Jan', amount: 65000, target: 70000 },
    { month: 'Feb', amount: 75000, target: 70000 },
    { month: 'Mar', amount: 85000, target: 70000 },
    // Add more months...
  ];

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className={`mt-2 text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ContributionChart data={contributionData} />
        </div>
        <div>
          <DioceseCard diocese={sampleDiocese} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;