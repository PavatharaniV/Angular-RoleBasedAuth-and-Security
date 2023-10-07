import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  tasks: any[] = [];

  constructor(private taskService: TaskServiceService,
    private router: Router,
    ) {}

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
    this.router.navigate((['task',taskId, 'update']));
  }

  viewTask(taskId: number) {
    console.log('View Task with ID:', taskId);
    this.router.navigate((['task',taskId, 'view']));

  }

  updateStatus(taskId: number) {
    console.log('Update Status with ID:', taskId);
    this.router.navigate((['task',taskId, 'update']));
  }

}
