import { useEffect, useMemo, useState } from "react"
import type { Todo } from "./models/todo"
import { getTodoById } from "./services/todo-service"

type TodoInfoPropType = {
    todoId: number
}
const TodoInfo = (props: Readonly<TodoInfoPropType>) => {
    console.log('TodoInfo called');
    const [todo, setTodo] = useState<Todo | undefined>(undefined)
    const [errorInfo, setErrorInfo] = useState('')
    const [isFetchOver, setIsFetchOver] = useState(false)

    const fetchTodoHandler = async () => {
        setIsFetchOver(false)
        try {
            const data: Todo = await getTodoById(props.todoId)
            setTodo(data)
            setErrorInfo('')
            setIsFetchOver(true)
        } catch (error: any) {
            setTodo(undefined)
            setErrorInfo(error.message)
            setIsFetchOver(true)
        }
    }

    useEffect(
        () => {
            (async function () {
                await fetchTodoHandler()
            })()
        },
        [props.todoId]
    )

    let design
    if (!isFetchOver) {
        design = <span>Loading...please wait</span>
    } else if (errorInfo !== '') {
        design = <span>{errorInfo}</span>
    } else if (todo === undefined) {
        design = <span>No record found</span>
    } else {
        design = (
            <table>
                <tr>
                    <td>Id: &nbsp;</td>
                    <td>{todo.id}</td>
                </tr>
                <tr>
                    <td>Task: &nbsp;</td>
                    <td>{todo.title}</td>
                </tr>
                <tr>
                    <td>Assigned To: &nbsp;</td>
                    <td>{todo.userId}</td>
                </tr>
                <tr>
                    <td>Status: &nbsp;</td>
                    <td>{todo.completed ? 'Done' : 'Pending'}</td>
                </tr>
            </table>
        )
    }
    return (
        <div>
            {design}
        </div>
    )
}

export default TodoInfo