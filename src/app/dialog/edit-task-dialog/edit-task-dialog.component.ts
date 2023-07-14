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

  private dialogTitle: string = "";
  task: Task | null = null;


  ngOnInit() {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];

    console.log(this.task);
    console.log(this.dialogTitle);
  }

}
