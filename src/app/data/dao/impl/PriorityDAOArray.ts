import {PriorityDAO} from "../interface/PriorityDAO";
import {Priority} from "../../../model/Priority";
import {Observable, of} from "rxjs";
import {TestData} from "../../TestData";


export class PriorityDAOArray implements PriorityDAO {
  // add(arg0: Priority): Observable<Priority> {
  //   return undefined;
  // }

  // delete(id: number): Observable<Priority> {
  //   return undefined;
  // }

  get(id: number): Observable<Priority> {
    //return undefined;
    return of(TestData.priorities[0]);//ToDo переписать
  }

  getAll(): Observable<Priority[]> {
    return of(TestData.priorities);
  }

  // update(arg0: Priority): Observable<Priority> {
  //   return undefined;
  // }

}
