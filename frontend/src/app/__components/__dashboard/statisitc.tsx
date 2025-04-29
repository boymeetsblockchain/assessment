"use client";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function ProgressDashboard() {
  const [progressData, setProgressData] = useState<
    { day: string; progress: number; hours: number; completedModules: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const colors = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { day: "Mon", progress: 20, hours: 1.5, completedModules: 3 },
        { day: "Tue", progress: 35, hours: 2.0, completedModules: 5 },
        { day: "Wed", progress: 40, hours: 1.8, completedModules: 4 },
        { day: "Thu", progress: 55, hours: 3.0, completedModules: 7 },
        { day: "Fri", progress: 70, hours: 2.5, completedModules: 5 },
        { day: "Sat", progress: 85, hours: 4.0, completedModules: 8 },
        { day: "Sun", progress: 95, hours: 3.0, completedModules: 6 },
      ];
      setProgressData(data);
      setIsLoading(false);
    }, 800);
  }, []);

  const courseCompletion = [
    { name: "Completed", value: 65 },
    { name: "In Progress", value: 25 },
    { name: "Not Started", value: 10 },
  ];

  if (isLoading) {
    return (
      <div className="p-4 rounded-lg shadow-md bg-white text-center">
        <p className="text-lg">Loading progress data...</p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg max-w-screen-lg w-full mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-primary">
        Learning Progress
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Modern Line Chart */}
        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-4">Weekly Progress</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <defs>
                  <linearGradient
                    id="colorProgress"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" />
                <YAxis />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                  fillOpacity={1}
                  fill="url(#colorProgress)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modern Bar Chart */}
        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-4">Daily Study Hours</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Bar
                  dataKey="hours"
                  radius={[8, 8, 0, 0]}
                  fill="#10b981"
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modern Doughnut Chart */}
        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-4">Course Completion</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseCompletion}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {courseCompletion.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Modern Completed Modules Bar Chart */}
        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-4">Completed Modules</h3>
          <div className="h-68">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Bar
                  dataKey="completedModules"
                  radius={[8, 8, 0, 0]}
                  fill="#f59e0b"
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
