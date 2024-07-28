import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <h1>Thingy's Portfolio</h1>
      </div>
      <div className={styles.navbarLinks}>  {/* Links are inside navbarLinks */}
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
