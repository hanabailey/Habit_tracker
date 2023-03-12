import './TodoItemTable.css'

function TodoItemTable(){

  //30치 같은 칸을 만드려고 할때 반복문으로 만들어서 돌릴 수 있음.
  const headcols = [];
  for(let i=0; i< 30; i++){
    headcols.push(<th key={i}>{i+1}</th>)
  }

  const cells =[];
  for(let i=0; i<30; i++){
    cells.push(<td key = {i}>{''}</td>)
  }

  return(
    <div>
      <table id="todoTable">
        <caption> Build your new habits!</caption>
        <colgroup>
          <col className='todoName'/>
        
        </colgroup>
      <thead>
        <tr>
          <th>{'Habit / Date'}</th>
          {headcols} {/*반복문 돌려서 얻은 걸 대신 넣어준다. */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{''}</td>
          {cells}
        </tr>
        <tr>
        <td>{''}</td>
          {cells}
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default TodoItemTable