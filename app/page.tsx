import Link from "next/link";
import styles from ".//Home.module.css";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Projects">Projects</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.intro}>
        <div className={styles.img}>
            <Image src={"/me.jpg"} alt={"me"} width={300} height={300}></Image>
          </div>
          <h2>Hi, I&apos;m Abdullah Arif</h2>
          <p>
            I am currently enrolled in a comprehensive course at Governor
            House focused on Web3, TypeScript, and Next.js, which involves
            months of intensive coding practice. This course covers advanced
            concepts in decentralized web applications, providing hands-on
            experience with TypeScript for type safety and scalability, and
            Next.js for server-side rendering and optimized web performance.
            This program aims to build a strong foundation in modern web
            development with a focus on blockchain and decentralized
            technologies.
          </p>
           </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Abdullah Arif. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
