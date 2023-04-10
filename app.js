// TODO
const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <TodoList todos={['Cucumber', 'Bakchoy', 'Banana']}></TodoList>
  </div>
);

const TodoListItem = (props) => {
  const [ishover, Sethover] = React.useState(false);
  const style = {
    fontWeight: ishover ? 'bold' : 'normal'
  }

  return (
    <li style={style} onMouseOver={() => Sethover(!ishover)}>{props.todo}</li>
  )
}

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
);


// const TodoListItem = (props) => (
//   <li>{props.item}</li>
// )

// // Now, update our `TodoList` to use the new `TodoListItem` component
// const TodoList = (props) => (
//   <ul>
//     {props.todos.map((todo) => (
//       <TodoListItem item={todo} />
//     ))}
//   </ul>
// );

ReactDOM.render(<App />, document.getElementById('app'));
