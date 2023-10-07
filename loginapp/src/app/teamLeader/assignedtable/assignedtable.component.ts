import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-assignedtable',
  templateUrl: './assignedtable.component.html',
  styleUrls: ['./assignedtable.component.css']
})
export class AssignedtableComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskServiceService,
    private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (tasks: any[]) => {
        this.tasks = tasks;
      }
    );
  }

  updateTask(taskId: number) {
    console.log('Update Task with ID:', taskId);
    this.router.navigate((['tasks',taskId, 'update']));
  }

  viewTask(taskId: number) {
    console.log('View Task with ID:', taskId);
    this.router.navigate((['tasks',taskId, 'view']));

  }

  updateStatus(taskId: number) {
    console.log('Update Status with ID:', taskId);
    this.router.navigate((['tasks',taskId, 'update']));
  }


}
