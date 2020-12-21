import React from 'react'
import Header from '../../components/header';
import styles from '../../styles/Home.module.css'


export default function PlanInput() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Upload a map file
        </h1>

        <p className={styles.description}>
          Make sure your map file is a '.csv' with the proper formatting
        </p>

        <div class="input-group ">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04"/>
            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}