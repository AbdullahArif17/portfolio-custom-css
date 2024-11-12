import Link from 'next/link';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Me</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Projects">Projects</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.contactForm}>
          <h2>Get in Touch</h2>
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Abdullah Arif. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
