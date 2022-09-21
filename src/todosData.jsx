
const todosData = () => {
 let cases;

 if(!localStorage.getItem('cases')) {
  cases = [];
 } else {
  cases = JSON.parse(localStorage.getItem('cases'));
 }
 return cases;
}

// todoData();


// const todosData = [
//  {
//   id: 1,
//   text: 'Погулять с псом',
//   completed: false
//  },
//  {
//   id: 2,
//   text: 'Сделать домашнюю работу',
//   completed: false
//  },
//  {
//   id: 3,
//   text: 'Сходить за хлебом',
//   completed: false
//  },
//  {
//   id: 4,
//   text: 'Поменять лампочку дома',
//   completed: false
//  },
//  {
//   id: 5,
//   text: 'Навестить бабушку',
//   completed: false
//  }
// ]

export default todosData;