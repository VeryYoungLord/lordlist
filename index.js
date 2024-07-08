const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let todoList = [];
  
  function showMenu() {
    console.log('1. View To-Do List');
    console.log('2. Add To-Do');
    console.log('3. Remove To-Do');
    console.log('4. Exit');
  }
  
  function viewTodoList() {
    console.log('To-Do List:');
    todoList.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
  }
  
  function addTodo() {
    readline.question('Enter new to-do: ', todo => {
      todoList.push(todo);
      console.log('To-Do added.');
      showMenu();
    });
  }
  
  function removeTodo() {
    readline.question('Enter the number of the to-do to remove: ', number => {
      todoList.splice(number - 1, 1);
      console.log('To-Do removed.');
      showMenu();
    });
  }
  
  function main() {
    showMenu();
    readline.question('Choose an option: ', option => {
      switch(option) {
        case '1':
          viewTodoList();
          break;
        case '2':
          addTodo();
          break;
        case '3':
          removeTodo();
          break;
        case '4':
          readline.close();
          return;
        default:
          console.log('Invalid option');
      }
      main();
    });
  }
  
  main();
  