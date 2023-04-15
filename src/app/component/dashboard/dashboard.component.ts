import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.taskObj = new Task();
    this.getAllTasks();
  }

  getAllTasks() {
    this.crudService.getAllTasks().subscribe((res) => (this.taskArr = res));
  }

  addTask(etask: Task) {
    this.crudService.addTask(etask).subscribe((res) => this.ngOnInit());
  }
}
