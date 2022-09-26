import React, { useState } from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';

function App() {
  class CreateTodosItem {
    constructor(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    };
  };

  const[active, setActive] = useState(false);

  const todosItems = todosData();

  const[length, changeLength] = useState(false);

  const[itemIdx, setDelete] = useState(false);

  const handleChange = id => {
    const index = todosItems.map(item => item.id).indexOf(id);
    if(todosItems[index].completed) {
      todosItems[index].completed = false;
    } else {
      todosItems[index].completed = true;
    }
    localStorage.setItem('cases', JSON.stringify(todosItems));
    return !active;
  }

  let inputValue;

  const getValueOfInput = event => {
    inputValue = event.target.value;
  }

  const setValueTodosData = (e) => {
    if(inputValue !== undefined) {
      e.stopPropagation();
      todosItems.push(new CreateTodosItem(todosItems.length + 1, inputValue, false));
      localStorage.setItem('cases', JSON.stringify(todosItems));
      return !length;
    }
  }

  const deleteTodosItem = id => {
    const index = todosItems.map(item => item.id).indexOf(id);
    todosItems.splice(index, 1)
    localStorage.setItem('cases', JSON.stringify(todosItems));
    return !itemIdx;
  }
  
  const activeTasks = todosItems.filter(task => task.completed === false);
  const completedTasks = todosItems.filter(task => task.completed === true)
  const finalTasks = [...activeTasks, ...completedTasks].map(item => {
    return(
      <ToDoItem
        key={item.id}
        description={item.text}
        completed={item.completed}
        handleChange={() => setActive(handleChange(item.id))}
        deleteTodosItem={() => setDelete(deleteTodosItem(item.id))}
      />
    );
  });
  return (
    <div className="App">
      <div className='form__input'>
        <input className='input__deal' onChange={getValueOfInput}placeholder="Введите дело"/>
        <button className='btnAdd' onClick={e => changeLength(setValueTodosData(e))}>
          Добавить делo
        </button>
      </div>
      {finalTasks}
    </div>
  );
};



/*
Перепишем наш компонент таким образом чтобы он был классовым компонентом
*/

class CreateNewTodosData {
  constructor(id, text, completed) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  };  
};

class Apps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todosItems : todosData(),
      inputValue : ''
    }
  }
  
  handleChange = id => {
    const index = this.state.todosItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todosItems} = state;
      todosItems[index].completed = true;
      return todosItems;
    })
  }
  getValueOfInput = event => {

    let {inputValue} = event.target.value;
    console.log(inputValue)
  }
  setValueTodosData = z => {
    console.log(z)
  }
  render(){
    const {todosItems} = this.state;
    const activeTasks = todosItems.filter(task => task.completed === false);
    const completedTasks = todosItems.filter(task => task.completed === true)
    const finalTasks = [...activeTasks, ...completedTasks].map(item => {
      return(
        <ToDoItem
          key={item.id}
          description={item.text}
          completed={item.completed}
          handleChange={() => this.handleChange(item.id)}
        />
      )
    })
    return (
      <div className="App">
        <input style={{marginRight: 100}} onChange={this.getValueOfInput}/>
        <button onClick={this.setValueTodosData}>Добавить делo</button>
        {finalTasks}
      </div>
    );
  };
};

export default App;