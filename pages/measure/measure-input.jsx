import React from 'react'
import Header from '../../components/header';
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function MeasureInput() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Choose a sample site to measure
          </h1>

          <p className={styles.description}>
            Ensure your sampling device's clock is synchronized with your device
          </p>
          <Image
            src="/map.png"
            alt="Picture of the author"
            width={400}
            height={300}
          />
          <button type="button" class="btn btn-primary">Measure</button>
        </div>
      </main>
    </div>
  )
  }