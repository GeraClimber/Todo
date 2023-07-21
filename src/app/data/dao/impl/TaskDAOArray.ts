import {TaskDAO} from "../interface/TaskDAO";
import {Observable, of} from "rxjs";
import {Task} from "../../../model/Task";
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";
import {TestData} from "../../TestData";

export class TaskDAOArray implements TaskDAO {
  // add(arg0: Task): Observable<Task> {
  //   return undefined;
  // }

  // delete(id: number): Observable<Task> {
  //   return undefined;
  // }

  // @ts-ignore
  get(id: number): Observable<Task | undefined> {
    return of(TestData.tasks.find(todo=> todo.id === id));
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  // getCompletedCountInCategory(category: Category): Observable<number> {
  //   return undefined;
  // }

  // getTotalCount(): Observable<number> {
  //   return undefined;
  // }

  // getTotalCountInCategory(category: Category): Observable<number> {
  //   return undefined;
  // }

  // getUncompletedCountInCategory(category: Category): Observable<number> {
  //   return undefined;
  // }

  search(category: Category, searchText: string | null, status: boolean | null, priority: Priority | null): Observable<Task[]> {
    return of(this.searchTasks(category, searchText, status, priority));
  }

  private searchTasks(category: Category, searchText: string | null, status: boolean | null, priority: Priority | null): Task[] {

    let allTasks = TestData.tasks;

    if (category != null) {
      allTasks = allTasks.filter(task=> task.category === category)
    }

    return allTasks;
  }

  update(task: Task): Observable<Task> {
    // @ts-ignore
    const taskTmp: Task = TestData.tasks.find(t=>t.id===task.id);
    TestData.tasks.splice(TestData.tasks.indexOf(taskTmp),1,task)
    return of(task);
  }

}
