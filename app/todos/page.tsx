"use client"
import { todo } from "node:test";
import { useEffect, useState } from "react"

interface Todo {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    priority: string,
    dueDate: string,
    category: string
}

export default function TodoPage() {
    const [checkState, setCheckState] = useState({ id: 0 });
    const [todoTitle, setTodoTitle] = useState("");
    const [todoCompleted, setTodoCompleted] = useState(false);
    const [todoDescription, setTodoDescription] = useState("");
    const [todoPriority, setTodoPriority] = useState("");
    const [todoDueDate, setTodoDueDate] = useState("");
    const [todoCategory, setTodoCategory] = useState("");
    const [todos, setTodos] = useState<[]>([]);
    async function fetchTodos() {
        const response = await fetch('http://localhost:4000/todos');
        const data = await response.json()
        // console.log(data)
        setTodos(data);
    }
    useEffect(() => {
        fetchTodos();
    }, [])

    async function markASCompleted(id: number) {
        let currentTodo = {};
        for (const todo of todos) {
            if (todo.id == id) {
                currentTodo = todo;
            }
        }
        currentTodo.completed = true;
        console.log('currentTodo: ', currentTodo)
        const response = await fetch(`http://localhost:4000/todos/${id}`, { method: "PUT", body: JSON.stringify(currentTodo) });
        // console.log(response);
        const data = await response.json()
        // console.log("single data:", data);
        setTodos([...todos])
    }
    async function deleteTodo(id: number) {
        let newTodos = todos;
        const response = await fetch(`http://localhost:4000/todos/${id}`, { method: "DELETE" });
        console.log(response);
        if (response.ok) {
            for (let i = 0; i < newTodos.length; i++) {
                if (newTodos[i].id == id) {
                    todos.splice(i, 1);
                    break;
                }
            }
            setTodos([...todos]);
        }
        const data = await response.json()
        // console.log("Delete data:", data);
    }
    function editData(id: number) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                setCheckState({ id: id });
                break;
            }
        }
    }
    function cancelEdit() {
        setCheckState({ id: 0 })
    }
    async function editTodo(id: number) {
        let currentTodo = {};
        for (const todo of todos) {
            if (todo.id == id) {
                currentTodo = todo;
            }
        }


        const editData = {
            id: id,
            title: todoTitle ? todoTitle : currentTodo.title,
            description: todoDescription ? todoDescription : currentTodo.description,
            completed: currentTodo.completed,
            priority: todoPriority ? todoPriority : currentTodo.priority,
            dueDate: todoDueDate ? todoDueDate : currentTodo.dueDate,
            category: todoCategory ? todoCategory : currentTodo.category,
        }
        const response = await fetch(`http://localhost:4000/todos/${id}`, { method: "PUT", body: JSON.stringify(editData) });
        console.log("response: ", response)
        if (response.ok) {
            setCheckState({ id: 0 })
            currentTodo.id = id
            currentTodo.title = todoTitle ? todoTitle : currentTodo.title
            currentTodo.description = todoDescription ? todoDescription : currentTodo.description
            currentTodo.completed = currentTodo.completed
            currentTodo.priority = todoPriority ? todoPriority : currentTodo.priority
            currentTodo.dueDate = todoDueDate ? todoDueDate : currentTodo.dueDate
            currentTodo.category = todoCategory ? todoCategory : currentTodo.category
            setTodos([...todos])
        }
        const data = await response.json()
        console.log("edited data", data);
    }
    async function addTodo() {
        // let id = 0;
        let todoLength = todos.length;
        const id = Number(todos[todoLength - 1].id);
        const postData = {
            id: id + 1,
            title: todoTitle,
            description: todoDescription,
            completed: todoCompleted,
            priority: todoPriority,
            dueDate: todoDueDate,
            category: todoCategory
        }
        const response = await fetch('http://localhost:4000/todos', { method: "POST", body: JSON.stringify(postData) });
        const data = await response.json()
        if (response.ok) {
            // setTodos([...todos, postData]);
            setTodos([postData, ...todos]);
        }
        console.log("edit response: ", response)
        console.log("edit data", data)
    }
    return (
        <>
            <div>
                <h2 className="text-4xl text-center">This is my todo list</h2>
            </div>

            <table className="mx-auto w-[800px] max-w-52">
                <thead>
                    <tr className="bg-black text-white">

                        <th className="p-4 text-left">ID</th>
                        <th className="p-4 text-left">Title</th>
                        <th className="p-4 text-left">Description</th>
                        <th className="p-4 text-left">Completed</th>
                        <th className="p-4 text-left">Priority</th>
                        <th className="p-4 text-left">DueDate</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4"></td>
                        <td className="p-4"><input type="text" name="title" onChange={(e) => { setTodoTitle(e.target.value) }} className="border-2 border-red-200" /></td>
                        <td className="p-4"><input type="text" name="description" onChange={(e) => { setTodoDescription(e.target.value) }} className="border-2 border-red-200" /></td>
                        <td className="p-4">
                            <div className="flex">
                                <label htmlFor="">Completed</label>
                                <input type="radio" name="completed" onChange={(e) => { setTodoCompleted(true) }} className="border-2 border-red-200" />
                            </div>
                            <div className="flex">
                                <label htmlFor="">Pending</label>
                                <input type="radio" name="completed" onChange={(e) => { setTodoCompleted(false) }} className="border-2 border-red-200" />
                            </div>
                        </td>
                        <td className="p-4"><input type="text" name="priority" onChange={(e) => { setTodoPriority(e.target.value) }} className="border-2 border-red-200" /></td>
                        <td className="p-4"><input type="text" name="dueDate" onChange={(e) => { setTodoDueDate(e.target.value) }} className="border-2 border-red-200" /></td>
                        <td className="p-4"><input type="text" name="category" onChange={(e) => { setTodoCategory(e.target.value) }} className="border-2 border-red-200" /></td>
                        <td className="p-4"><button className="bg-green-700 p-4 text-white" onClick={addTodo}>Add</button></td>
                    </tr>
                    {todos.map((todo: Todo) => (
                        <tr key={todo.id} className=" even:bg-white odd:bg-[whitesmoke]">
                            <td className="p-4">
                                {todo.id}
                            </td>
                            <td className="p-4">
                                {checkState.id == todo.id ?
                                    <input type="text" defaultValue={todo.title} onChange={(e) => { setTodoTitle(e.target.value) }} className="border-2 border-red-200" />
                                    :
                                    todo.title
                                }
                            </td>
                            <td className="p-4">
                                {checkState.id == todo.id ?
                                    <input type="text" defaultValue={todo.description} onChange={(e) => { setTodoDescription(e.target.value) }} className="border-2 border-red-200" /> :
                                    todo.description
                                }
                            </td>
                            <td className="p-4">{todo.completed ? "completed" : "Pending"}</td>
                            <td className="p-4">
                                {checkState.id == todo.id ?
                                    <input type="text" defaultValue={todo.priority} onChange={(e) => { setTodoPriority(e.target.value) }} className="border-2 border-red-200" /> :
                                    todo.priority
                                }
                            </td>
                            <td className="p-4">
                                {checkState.id == todo.id ?
                                    <input type="text" defaultValue={todo.dueDate} onChange={(e) => { setTodoDueDate(e.target.value) }} className="border-2 border-red-200" /> :
                                    todo.dueDate
                                }
                            </td>
                            <td className="p-4">
                                {checkState.id == todo.id ?
                                    <input type="text" defaultValue={todo.category} onChange={(e) => { setTodoCategory(e.target.value) }} className="border-2 border-red-200" /> :
                                    todo.category
                                }
                            </td>
                            <td className="p-4">
                                {
                                    todo.completed ?
                                        <>
                                            <button className="bg-red-500 text-white p-4" onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                                        </>
                                        :
                                        <>
                                            <button className="bg-blue-500 text-white p-4" onClick={() => { markASCompleted(todo.id) }}>Mark as completed</button>
                                        </>
                                }

                                {
                                    checkState.id == todo.id ?
                                        <div className="flex">
                                            <button className="bg-green-300 mx-2 text-white p-4" onClick={() => { editTodo(todo.id) }}>Save</button>
                                            <button className="bg-gray-500 p-4" onClick={cancelEdit}>Cancel</button>
                                        </div>
                                        :
                                        <button className="bg-green-300 mx-2 text-white p-4" onClick={() => { editData(todo.id) }}>Edit</button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}