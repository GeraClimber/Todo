import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input()
  categories: Category[]=[];

  @Output()
  selectCategory = new EventEmitter<Category>();

  selectedCategory: Category |null = null;

  constructor() {
  }

  showTasksByCategory(category: Category) {
    if (this.selectedCategory == category)
      return;
    this.selectedCategory = category;

    this.selectCategory.emit(this.selectedCategory);
  }

}
