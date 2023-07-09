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

  // search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
  //   return undefined;
  // }

  // update(arg0: Task): Observable<Task> {
  //   return undefined;
  // }

}
