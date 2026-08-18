import { Outlet } from "react-router-dom";

import Header from "../Header";
import BottomNavigation from "../BottomNavigation";

import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}
