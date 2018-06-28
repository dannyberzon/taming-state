const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';

function reducer(state, action) {
  switch(action.type) {
    case TODO_ADD : {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE : {
      return applyToggleTodo(state, action);
    }
    default : return state;
  }
}

function applyAddTodo(state, action) {
  const todo = Object.assign({}, action.todo, { completed: false });
  const todos = state.todos.concat(todo);
  return Object.assign({}, state, { todos });
}

function applyToggleTodo(state, action) {
  const todos = state.todos.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo );
  return Object.assign({}, state, { todos });
}

function doAddTodo(id, name) { return {
    type: TODO_ADD,
    todo: { id, name },
  };
}
function doToggleTodo(id) { return {
    type: TODO_TOGGLE,
    todo: { id },
  };
}

const initialState = {
  todos: [],
};

const store = Redux.createStore(reducer, initialState);

console.log('initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('store update, current state:');
  console.log(store.getState());
});

store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));
store.dispatch(doToggleTodo('0'));

unsubscribe();