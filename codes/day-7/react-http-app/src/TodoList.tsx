// import { Fragment } from "react"
import { useState } from "react"
import type { Todo } from "./models/todo"
import { getTodos } from "./services/todo-service"

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [errorInfo, setErrorInfo] = useState('')
    const [isFetchOver, setIsFetchOver] = useState(false)

    const loadDataHandler = async () => {
        setIsFetchOver(false)
        try {
            const data: Todo[] = await getTodos()
            setTodos(data.slice(0, 10))
            setErrorInfo('')
            setIsFetchOver(true)
        } catch (error: any) {
            setTodos([])
            setErrorInfo(error.message)
            setIsFetchOver(true)
        }
    }

    const todosTable = todos.map(
        (todo) => {
            return <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.userId}</td>
                <td>
                    {todo.completed ? 'Done' : 'Pending'}

                </td>
            </tr>
        }
    )

    let design
    if (!isFetchOver) {
        design = <span>Loading...please wait</span>
    } else if (errorInfo !== '') {
        design = <span>{errorInfo}</span>
    } else if (todos.length === 0) {
        design = <span>No records found</span>
    } else {
        design =
            (
                <>
                    <h2>List of Todos</h2>
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todosTable}
                        </tbody>
                    </table>
                </>
            )
    }

    return (
        <div>
            <button onClick={loadDataHandler}>Load Data</button>
            <br />
            {design}
        </div>
    )
}

export default TodoList

// function Fragment(props: any) {
//     return props.children
// }