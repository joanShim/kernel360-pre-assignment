import {
  BookOpenCheck,
  CircleUserRound,
  LayoutGrid,
  MessageCircleMore,
  Settings,
} from "lucide-react";

export const MENU_ITEMS = [
  {
    id: "overview",
    icon: <LayoutGrid />,
    label: "Overview",
    path: "/overview",
    disabled: true,
  },
  {
    id: "tasks",
    icon: <BookOpenCheck />,
    label: "Tasks",
    path: "/tasks",
    disabled: true,
  },
  {
    id: "mentors",
    icon: <CircleUserRound />,
    label: "Mentors",
    path: "/mentors",
    disabled: false,
  },
  {
    id: "messages",
    icon: <MessageCircleMore />,
    label: "Messages",
    path: "/messages",
    disabled: true,
  },
  {
    id: "settings",
    icon: <Settings />,
    label: "Settings",
    path: "/settings",
    disabled: true,
  },
];
