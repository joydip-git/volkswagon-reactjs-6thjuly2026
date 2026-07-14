import type { Todo } from "../models/todo"

export async function getTodos(): Promise<Todo[]> {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos: Todo[] = (await response.json()) as Todo[]
    return todos
}