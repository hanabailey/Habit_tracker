
export type HabitStore = {
  [habitItemId:string]:{
    name:string,
    completed:{
      [year:number]:{
        [month:number]:number[];
      }
    }
  }
}
// 인덱스 시그니처 타입, [대괄호]안에 key의 타입을 넣어준다. 리터럴타입을 쓰면 똑같은 문자 그대로가 들어가야하지만 우리는 각각의 index를 넣어줘야하니까 사용.

const habitStore: HabitStore ={
  'abc':{
    name: 'coding',
    completed :{
      2023: {
        3: [1,4,7]
      }
    }
  } 
}

// object의 인덱스는 key, array의 인덱스는 숫자
