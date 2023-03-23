import styles from './MonthsCalander.module.css'
import MonthButtons from './MonthButtons'

function Months({month, setMonth}){
  
  return(
    <div className={styles.months}>
      <div className={styles.month_title}>Month</div>
       <MonthButtons selectedMonth={month} setMonth={setMonth}/>
    </div>
  )
}


export default Months