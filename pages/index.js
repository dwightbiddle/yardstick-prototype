import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yard Stick Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Yard Stick!
        </h1>

        <p className={styles.description}>
          Get started by choosing an activity
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Plan &rarr;</h3>
            <p>Let's figure out how to prepare</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Measure &rarr;</h3>
            <p>Time to get sampling!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Analyze &rarr;</h3>
            <p>Tools to help you understand the impact of your practices</p>
          </a>

          <a
            href="https://www.linkedin.com/in/christolles/"
            className={styles.card}
          >
            <h3>Learn more about us &rarr;</h3>
            <p>
              Learn about Yard Stick, its mission, and its people.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/yardstick.svg" alt="Yard Stick Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
