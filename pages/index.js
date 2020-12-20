
import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

function Login() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(err => setUser(null))
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Yard Stick Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AmplifySignOut/>

      <main className={styles.main}>
        

        <h1 className={styles.title}>
          Welcome to Yard Stick!
        </h1>

        <p className={styles.description}>
          Get started by choosing an activity
        </p>

        <div className={styles.grid}>
          <Link href="/plan/plan-input">
            <a className={styles.card}>
              <h3>Plan &rarr;</h3>
              <p>Let's figure out how to prepare</p>
            </a>
          </Link>

          <Link href="/measure/measure-input">
            <a className={styles.card}>
              <h3>Measure &rarr;</h3>
              <p>Time to get sampling!</p>
            </a>
          </Link>

          <Link href="/analyze/analyze-input">
            <a className={styles.card}>
              <h3>Analyze &rarr;</h3>
              <p>Tools to help you understand the impact of your practices</p>
            </a>
          </Link>
          
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

export default withAuthenticator(Login)