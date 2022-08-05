import { task } from "../model/task"

export interface TaskRepository {
    insertTask(task: task) :Promise<void>
}