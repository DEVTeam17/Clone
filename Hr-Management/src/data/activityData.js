import { getDate } from "../utils/getDate";

const activityData = [
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "10:00 AM",
    checkOut: "not yet",
    date: getDate(),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    date: getDate(-1),
  },

  {
    type: "activity",
    title: "Payroll",
    bottomText: "September 2023",
    date: getDate(-1),
  },
  {
    type: "activity",
    title: "Time Off",
    bottomText: "Grandfather has passed away",
    date: getDate(-1),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "10:15 AM",
    checkOut: "07:20 PM",
    date: getDate(-2),
  },
  {
    type: "activity",
    title: "Learning Session",
    bottomText: "Learning new skills",
    date: getDate(-2),
  },
  {
    type: "activity",
    title: "Coffee Break",
    bottomText: "Break time with colleagues",
    date: getDate(-2),
  },
  {
    type: "activity",
    title: "Project Completion",
    bottomText: "Finished project XYZ",
    date: getDate(-2),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "07:12 AM",
    checkOut: "05:20 PM",
    date: getDate(-3),
  },
  {
    type: "activity",
    title: "Team Meeting",
    bottomText: "Discussing team goals",
    date: getDate(-3),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "09:00 AM",
    checkOut: "06:20 PM",
    date: getDate(-4),
  },
  {
    type: "activity",
    title: "Training Session",
    bottomText: "Training on new software",
    date: getDate(-4),
  },
  {
    type: "activity",
    title: "Task Completed",
    bottomText: "Completed task XYZ",
    date: getDate(-4),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "09:55 AM",
    checkOut: "06:20 PM",
    date: getDate(-5),
  },
  {
    type: "activity",
    title: "Meeting",
    bottomText: "Client meeting at 2 PM",
    date: getDate(-5),
  },
  {
    type: "activity",
    title: "Project Kickoff",
    bottomText: "Started new project ABC",
    date: getDate(-5),
  },
  {
    type: "attendance",
    title: "Attendance Check",
    checkIn: "08:55 AM",
    checkOut: "05:00 PM",
    date: getDate(-6),
  },
  {
    type: "activity",
    title: "Deadline",
    bottomText: "Deadline for project DEF",
    date: getDate(-6),
  },
];

export default activityData;
