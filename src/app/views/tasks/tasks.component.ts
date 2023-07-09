import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: false }) sort: MatSort | null = null;

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>;

  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataHandler.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.refreshTable();
    });
  }

  ngAfterViewInit() {
    this.addTableObjects();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task): string {

    if (task.completed) {
      return '#f8f9fa'
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
    this.addTableObjects();

    // @ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': { return task.priority ? task.priority.id : null}
        case 'category': { return task.category ? task.category.title : null}
        case 'date': { return task.date ? task.date : null}
        case 'title': { return task.title}
      }
    };

  }

  private addTableObjects() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }




}
