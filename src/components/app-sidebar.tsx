"use client";

import * as React from "react";
import {
  ShoppingCart,
  Settings,
  Package,
  LayoutGrid,
  LogOut,
  Blocks,
  BellDot,
  SquareArrowOutUpRight,
  Mail,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LogoutConfirmationDialog } from "./dialog-logout-confirmation";
import Link from "next/link";

const data = {
  user: {
    name: "Nzar",
    email: "admin@nvh.com",
    avatar: "https://avatars.githubusercontent.com/u/98880087",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutGrid,
      isActive: true,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      url: "/products",
      icon: Package,
    },
    {
      title: "Emails",
      url: "/emails",
      icon: Mail,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: Blocks,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: BellDot,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

type SidebarProps = React.ComponentProps<typeof Sidebar>;

export function AppSidebar(props: SidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Link target="_blank" rel="noopener noreferrer" href="/">
          <SidebarMenuButton
            tooltip="Preview Store"
            className="hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <SquareArrowOutUpRight />
            <span>Preview Store</span>
          </SidebarMenuButton>
        </Link>
        <LogoutConfirmationDialog>
          <SidebarMenuButton
            tooltip="Log out"
            className="hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <LogOut />
            <span>Log out</span>
          </SidebarMenuButton>
        </LogoutConfirmationDialog>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
