import { Card } from "react-bootstrap";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import '../App.css'

interface todosParams {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodoDataLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`);
  const todos = response.json();
  return todos;
}

function TodosPage() {

  const todos = useLoaderData() as todosParams[];


  return (
    <>
      <h1 className="text-center my-3">TODOS</h1>
      <div className="todo-div">
      {todos.map((todo) => (
            <Card className="todo-card" key={todo.id}>
            <Card.Body><Link className="todo-link" to={``}>{todo.title}</Link></Card.Body>
          </Card>
      ))}
      </div>
    </>
  );
}

export default TodosPage;
