import Link from "next/link";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Calculator",
      description: "Calculator using Typescript.",
      link: "https://calculator-theta-mocha.vercel.app/",
    },
    {
      title: "Resume Builder",
      description: "Editable Resume Builder using Typescript.",
      link: "https://hackathon-xi-woad.vercel.app/",
    },
    {
      title: "Countdown Timer",
      description: "Timer using Nextjs.",
      link: "https://timer-mu-sepia.vercel.app/",
    },
    {
      title: "Weather Widget",
      description: "Weather App using Nextjs.",
      link: "https://weather-widget-eight-theta.vercel.app/",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Projects</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Projects">Projects</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {projects.map((project, index) => (
          <section key={index} className={styles.project}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </section>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Abdullah Arif. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
