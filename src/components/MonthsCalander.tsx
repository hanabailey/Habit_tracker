import styles from './MonthsCalander.module.css'
import MonthButtons from './MonthButtons'

function Months(){
  
  return(
    <div className={styles.months}>
      <div className={styles.month_title}>Month</div>
       <MonthButtons/>
    </div>
  )
}


export default Months