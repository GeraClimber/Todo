import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";
import {Priority} from "../../model/Priority";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dataHandler: DataHandlerService
    ) {
  }

  dialogTitle: string = "";
  task: Task = this.data[0];

  tmpTitle: string="";
  tmpCategory: Category | undefined = undefined;
  tmpPriority: Priority | undefined;
  categories: Category[] = [];
  priorities: Priority[] = [];


  ngOnInit() {

    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;
    this.tmpPriority = this.task.priority;

    this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
    this.dataHandler.getAllPriorities().subscribe(items => this.priorities = items);
  }

  onConfirm(): void {

      this.task.title = this.tmpTitle;
      this.task.category = this.tmpCategory;
      this.task.priority = this.tmpPriority;
      this.dialogRef.close(this.task);
  }

  onCancel(): void {

    this.dialogRef.close(null);
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {maxWidth: '500px',data: {
          dialogTitle: 'Подтвердите действие',
          message: `Вы действительно хотите удалить задачу: "${this.task.title}"?`
        } , autoFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dialogRef.close("delete");
      }
    });
  }


}
