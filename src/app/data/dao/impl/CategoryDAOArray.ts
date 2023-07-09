import {CategoryDAO} from "../interface/CategoryDAO";
import {Category} from "../../../model/Category";
import {Observable, of} from "rxjs";
import {TestData} from "../../TestData";

export class CategoryDAOArray implements CategoryDAO {
  // add(arg0: Category): Observable<Category> {
  //   return undefined;
  // }
  //
  // delete(id: number): Observable<Category> {
  //   return undefined;
  // }

  get(id: number): Observable<Category> {
    //return undefined;
    return of(TestData.categories[0]);//ToDo переписать
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  // search(title: string): Observable<Category[]> {
  //   return undefined;
  // }

  // update(arg0: Category): Observable<Category> {
  //   return undefined;
  // }

}
