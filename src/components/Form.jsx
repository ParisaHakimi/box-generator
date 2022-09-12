import React from 'react'
import styles from "../static/form.module.css"

const Form = () => {
  return (
    <form className={styles.form}>
    <label htmlFor="">Color</label>
    <input type="text" />
    <input type="submit" value="Add" />
  </form>
  )
}

export default Form