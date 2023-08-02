import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dataHandler: DataHandlerService
    ) {
  }

  dialogTitle: string = "";
  task: Task = this.data[0];

  tmpTitle: string="";
  tmpCategory: Category | undefined = undefined;
  categories: Category[] = [];


  ngOnInit() {

    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;

    this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
  }

  onConfirm(): void {

      this.task.title = this.tmpTitle;
      this.task.category = this.tmpCategory;
      this.dialogRef.close(this.task);
  }

  onCancel(): void {

    this.dialogRef.close(null);
  }


}
