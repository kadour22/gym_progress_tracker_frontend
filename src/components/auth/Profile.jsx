import React,{useState,useEffect} from 'react'
import { UserAPI } from '../../api/api';
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await UserAPI.user_data();
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    fetchUserData();
  }, []);


  return (
     <div className="min-h-screen bg-[#0b0b0b] text-white px-4 md:px-10 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 text-sm">Track your fitness progress</p>
        </div>
        <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold">
          + New Program
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Programs" value={userData?.programs} icon="P" />
        <StatCard title="Programs Data" value={userData?.programs_data} icon="D" />
        <StatCard title="Workouts" value={12} icon="W" />
        <StatCard title="Calories" value={2450} icon="C" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Activity */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-6 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4 text-sm">
            {[
              "Completed chest workout",
              "Added new program",
              "Tracked calories",
              "Updated profile",
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">{item}</span>
                <span className="text-gray-500">Today</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">Progress</h2>

          <ProgressBar label="Strength" value={80} />
          <ProgressBar label="Endurance" value={65} />
          <ProgressBar label="Consistency" value={90} />
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#1a1a1a] p-6 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">Programs Overview</h2>
          <p className="text-gray-400 text-sm">
            You currently have {userData?.programs} active programs with {userData?.programs_data} tracked data points.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl flex items-center justify-center">
          <span className="text-lime-400 text-6xl font-bold">.T</span>
        </div>
      </div>
    </div>
  )
}
function StatCard({ title, value, icon }) {
  return (
    <div className="relative bg-[#1a1a1a] p-6 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[100px] font-bold">
        {icon}
      </div>
      <div className="relative z-10">
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-3xl font-bold text-lime-400 mt-2">{value}</h2>
      </div>
    </div>
  );
}
export default Profile