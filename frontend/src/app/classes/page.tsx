"use client";

import { ChevronDown, Calendar, User, Clock, Video } from "lucide-react";
import Link from "next/link";

const classData = [
  {
    title: "Artificial Intelligence",
    date: "Monday, 28 June 2025",
    teacher: "Mr. Mark Jefferson",
    time: "10:00 AM - 11:00 AM",
    platform: "Zoom",
    students: ["Leah", "Leo", "Sarah"],
    joinedCount: 25,
  },
  {
    title: "Business English Basics",
    date: "Tuesday, 29 June 2025",
    teacher: "Ms. Emily Carter",
    time: "2:00 PM - 3:00 PM",
    platform: "Google Meet",
    students: ["Emma", "Olivia", "Noah"],
    joinedCount: 18,
  },
  {
    title: "Professional Communication",
    date: "Wednesday, 30 June 2025",
    teacher: "Mr. John Doe",
    time: "4:00 PM - 5:30 PM",
    platform: "Microsoft Teams",
    students: ["William", "Sophia", "James"],
    joinedCount: 30,
  },
];

const ClassCard = ({
  title,
  date,
  teacher,
  time,
  platform,
  students,
  joinedCount,
}: (typeof classData)[number]) => {
  return (
    <div className="bg-white rounded-2xl w-full space-y-4 p-6 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-base font-semibold">{title}</h1>
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-50">
          <p className="text-gray-500 text-xs">Today</p>
          <ChevronDown className="text-gray-500" size={16} />
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <p className="text-gray-600 text-xs">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <User size={16} className="text-gray-400" />
          <p className="text-gray-600 text-xs">{teacher}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-400" />
          <p className="text-gray-600 text-xs">{time}</p>
        </div>
        <div className="flex items-center gap-2">
          <Video size={16} className="text-gray-400" />
          <p className="text-gray-600 text-xs">{platform}</p>
        </div>
      </div>

      {/* Students */}
      <div className="flex flex-col gap-y-2">
        <h2 className="text-sm font-semibold text-gray-700">Students</h2>
        <div className="flex items-center space-x-2">
          {students.map((student, idx) => (
            <img
              key={idx}
              src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${student}`}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
          ))}
          <p className="text-xs text-gray-500 ml-2">
            + {joinedCount} people joined the class
          </p>
        </div>
      </div>

      {/* Join Button */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-lg w-full transition">
          <Link href={"/classes/1"}>Join the Class</Link>
        </button>
      </div>
    </div>
  );
};

function ClassesPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {classData.map((classItem, idx) => (
        <ClassCard key={idx} {...classItem} />
      ))}
    </div>
  );
}

export default ClassesPage;
