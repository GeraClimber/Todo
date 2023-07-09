import {Observable} from "rxjs";


export interface CommonDAO<T> {

  //add(arg0: T): Observable<T>;

  get(id: number): Observable<T>;

  //delete(id: number): Observable<T>;

  //update(arg0: T): Observable<T>;

  getAll(): Observable<T[]>;

}
