import './MonthButtons.css'


function MonthButtons(){
  return(
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>10</button>
      <button>11</button>
      <button>12</button>
    </div>
  )
}

export default MonthButtons



{/* 버튼을 한개 만들어서 여러개로 만들떄 
export const button = ({month})=>{
  return <button>{month}</button>
}
 */}

 {/* map을 써서 돌리고 싶다면 값이 들어있는 배열이 먼저 하나 존재해야되니까
  const month= [1,2,3,4,5,6,7,8,9,10,11,12]로 만들어놓고 map을 돌려서 12달치 버튼을 만들면 됨 
 */}