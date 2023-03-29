import { text } from "stream/consumers";
import styles from "./HabitItemTable.module.css";
import { DateTime } from "luxon";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import HabitTableRow from "./HabitTableRow";

function HabitItemTable({ month }) {
  
  const daysInMonth = DateTime.local(2023, month).daysInMonth;
  const [check, setCheck] = useState([true, true, false, false, true]);

  //30치 같은 칸을 만드려고 할때 반복문으로 만들어서 돌릴 수 있음.
  const headcols = [];
  for (let i = 0; i < daysInMonth; i++) {
    headcols.push(
      <th className={styles.th} key={i}>
        {i + 1}
      </th>
    );
  }

  // <span>{<FontAwesomeIcon icon={faCircle}/> }</span>

  // const cells = [];
  // for (let i = 0; i < daysInMonth; i++) {
  //   if (check[i] === true) {
  //     cells.push(
  //       <td className={styles.td} key={i}>
  //         {<FontAwesomeIcon icon={faCheck} />}
  //       </td>
  //     );
  //   } else if (check[i] === false) {
  //     cells.push(
  //       <td className={styles.td} key={i}>
  //         {<FontAwesomeIcon icon={faXmark} />}
  //       </td>
  //     );
  //   } else {
  //     cells.push(
  //       <td className={styles.td} key={i}>
  //         {""}
  //       </td>
  //     );
  //   }
  // }
  // cell 관련 코드는 row 컴포넌트로 이동시킴 



  const checksHandler = (isChecked) => {
    if(isChecked===true){
      check.push(true)
    }else{
      check.push(false)
    }
    setCheck([...check])
  };

  const rows = [];

  return (
    <div>
      <table className={styles.habitTable}>
        <caption className={styles.caption}> Build your new habits!</caption>
        <colgroup>
          <col className={styles.todoName} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.th}>{"Habit / Date"}</th>
            {headcols}
            {/*반복문 돌려서 얻은 걸 대신 넣어준다. */}
          </tr>
        </thead>

        <tbody>

          <HabitTableRow month={month}/>
          <HabitTableRow month={month}/>
      
          {/* {headcols.map( (cell) => (<HabitTableRow checksHandler={checksHandler} cells={cells}/>))} */}
          {/* <tr>
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
          </tr> */}
          {/* <tr>
            <td className={styles.td}>
              <input type="text" className={styles.habitInput} />
            </td>
            {cells}
          </tr>
          <tr>
            <td className={styles.td}>
              <input type="text" className={styles.habitInput} />
            </td>
            {cells}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default HabitItemTable;
