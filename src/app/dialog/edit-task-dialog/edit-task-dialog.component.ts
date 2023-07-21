import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],

    ) {
  }

  dialogTitle: string = "";
  task: Task = this.data[0];

  tmpTitle: string="";


  ngOnInit() {

    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
  }

  onConfirm(): void {

      this.task.title = this.tmpTitle;
      this.dialogRef.close(this.task);
  }

  onCancel(): void {

    this.dialogRef.close(null);
  }


}
