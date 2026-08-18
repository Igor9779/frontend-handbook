import type { LucideIcon } from "lucide-react";
import { Home, Search, Star, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

import { routes } from "@/lib/routes";
import styles from "./BottomNavigation.module.css";

type NavigationItem = {
  icon: LucideIcon;
  label: string;
  path: (typeof routes)[keyof typeof routes];
};

const navigationItems: NavigationItem[] = [
  {
    icon: Home,
    label: "Home",
    path: routes.home,
  },
  {
    icon: Search,
    label: "Search",
    path: routes.search,
  },
  {
    icon: Star,
    label: "Favorites",
    path: routes.favorites,
  },
  {
    icon: Settings,
    label: "Settings",
    path: routes.settings,
  },
];

export default function BottomNavigation() {
  return (
    <nav className={styles.navigation}>
      {navigationItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          aria-label={label}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Icon size={22} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
