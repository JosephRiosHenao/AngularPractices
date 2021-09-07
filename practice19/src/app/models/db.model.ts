import { Person } from "./person.model";
import { Task } from "./task.model";

export interface DB  {
    persons: Person[] | null;
    tasks: Task[] | null;
}
