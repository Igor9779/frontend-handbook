import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Frontend Handbook</h1>
        <p className={styles.subtitle}>Подготовка к Frontend собеседованиям.</p>
      </div>
    </header>
  );
}
