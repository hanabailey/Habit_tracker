import './MonthsCalander.css'
import MonthButtons from './MonthButtons'

function Months(){
  return(
    <div className="months">
      <div className='month_title'>Month</div>
        <MonthButtons />
    </div>
  )
}


export default Months