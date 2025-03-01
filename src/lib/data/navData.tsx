import {
  BookUser,
  BoomBox,
  LucideIcon,
  Mailbox,
  Settings2Icon,
} from "lucide-react";

export interface navLinkType {
  label: string;
  key: string;
  icon: LucideIcon;
}

export const navLinks: navLinkType[] = [
  {
    label: "Chat",
    key: "/",
    icon: Mailbox,
  },
  {
    label: "Friends",
    key: "/friends",
    icon: BookUser,
  },
  {
    label: "Features",
    key: "/features",
    icon: BoomBox,
  },
  {
    label: "Settings",
    key: "/settings",
    icon: Settings2Icon,
  },
];
