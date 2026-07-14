// import { Fragment } from "react"
import { useEffect, useState } from "react"
import type { Todo } from "./models/todo"
import { getTodos } from "./services/todo-service"
import TodoInfo from "./TodoInfo"

const TodoList = () => {
    console.log('Todolist loaded');
    const [todos, setTodos] = useState<Todo[]>([])
    const [errorInfo, setErrorInfo] = useState('')
    const [isFetchOver, setIsFetchOver] = useState(false)
    const [selectedId, setSelectedId] = useState(0)

    const fetchAllTodos = async () => {
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

    useEffect(
        () => {
            console.log('[TDL] everytime...');

            const x = 100
            console.log(x);
            return () => {
                //x = 0
                console.log(x);
                console.log('[TDL] clean-up every time first except the first time');
            }
        }
    )

    useEffect(
        () => {
            //immediately invocable function expression (IIFE)
            // (async function () {
            //     await fetchAllTodos()
            // })()
            console.log('TDL one time...until and unless unmounted');
            async function invoke() {
                await fetchAllTodos()
            }
            invoke()
            
            return () => {              
                console.log('[TDL] clean-up ONE TIME during unmounting except the first time');
            }
        },
        []
    )
    const todosTable = todos.map(
        (todo) => {
            return <tr key={todo.id}>
                <td onClick={() => setSelectedId(todo.id)}>
                    <u>{todo.title}</u>
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
                            </tr>
                        </thead>
                        <tbody>
                            {todosTable}
                        </tbody>
                    </table>
                    <br />
                    {
                        selectedId > 0 ? <TodoInfo todoId={selectedId} /> : <span>select a task to view the details</span>
                    }
                </>
            )
    }

    return (
        <div>
            {/* <button onClick={fetchAllTodos}>Load Data</button> */}
            <br />
            {design}
        </div>
    )
}

export default TodoList

// function Fragment(props: any) {
//     return props.children
// }