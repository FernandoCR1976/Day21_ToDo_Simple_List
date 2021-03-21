import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
	const [todo, setTodo] = useState({});
	const [todos, setTodos] = useState([
		{ todo: "TAREA 1" },
		{ todo: "TAREA 2" },
		{ todo: "TAREA 3" }
	]);

	const handleChange = e => setTodo({ [e.target.name]: e.target.value });

	const handleClick = e => {
		if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
			alert("¡¡¡¡INGRESE UNA NUEVA TAREA!!!");
			return;
		}
		setTodos([...todos, todo]);
	};

	const deleteTodo = indice => {
		const newTodos = [...todos];
		newTodos.splice(indice, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<label>Agregar tarea</label>
				<br />
				<input type="text" name="todo" onChange={handleChange} />
				<button onClick={handleClick}>Agregar Tarea </button>
			</form>
			{todos.map((value, index) => (
				<Todo
					todo={value.todo}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
		</>
	);
};

export default Form;
