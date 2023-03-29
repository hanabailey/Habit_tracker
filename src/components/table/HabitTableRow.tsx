import React from 'react'
import { useState } from 'react';
import styles from './HabitItemTable.module.css'
import HabitItemTable from './HabitItemTable'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";

function HabitTableRow({month}) {
  const daysInMonth = DateTime.local(2023, month).daysInMonth;
  const [check, setCheck] = useState([true, true, false, false, true]);

  const cells = [];
  for (let i = 0; i < daysInMonth; i++) {
    if (check[i] === true) {
      cells.push(
        <td className={styles.td} key={i}>
          {<FontAwesomeIcon icon={faCheck} />}
        </td>
      );
    } else if (check[i] === false) {
      cells.push(
        <td className={styles.td} key={i}>
          {<FontAwesomeIcon icon={faXmark} />}
        </td>
      );
    } else {
      cells.push(
        <td className={styles.td} key={i}>
          {""}
        </td>
      );
    }
  }
  // 로우 컴포넌트 한줄에서 일어나는 일이라서 작동이 seperate 된다
  


  const checksHandler = (isChecked) => {
    if(isChecked===true){
      check.push(true)

    }else{
      check.push(false)
    }
    setCheck([...check])
  };


  return (
    <tr>
      <td className={styles.td}>
        <input type="text" className={styles.habitInput} />
        <span onClick={()=>checksHandler(true)}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span onClick={()=>checksHandler(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </td>
    {cells}
  </tr>
  )
}

export default HabitTableRow