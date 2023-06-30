import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>;

  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => {
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
  }

  private addTableObjects() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
