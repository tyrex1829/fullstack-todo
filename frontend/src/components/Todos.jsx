/* todos = [
    {title: ""},
    {desc: ""}
], []
*/

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>
            {todo.completed == true ? "Completed" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
