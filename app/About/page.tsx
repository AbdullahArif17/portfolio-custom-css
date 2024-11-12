import Link from "next/link";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Me</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Projects">Projects</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.bio}>
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m a dedicated and passionate web developer with a strong
            focus on modern technologies like Web3, TypeScript, and Next.js.
            Currently, I&apos;m expanding my expertise through an in-depth course at
            Governor House, which involves months of rigorous coding and project
            development. With a keen interest in building scalable,
            user-friendly applications, I combine practical experience and a
            love for learning to deliver effective and innovative solutions. On
            this portfolio, you&apos;ll find projects that highlight my technical
            abilities and my journey as a developer. I enjoy exploring the
            latest in decentralized technologies and web frameworks to stay
            ahead in this fast-evolving field. Whether it&apos;s through a complex
            project or a small, impactful feature, I&apos;m committed to creating
            meaningful and high-quality digital experiences.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Abdullah Arif. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
