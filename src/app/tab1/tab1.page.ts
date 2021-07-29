import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private apiServ: ApiService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getTask();
  }

  tasks: Task[] = [];
  getTask() {
    return this.apiServ.getAllTask().subscribe(async (data) => {
      this.tasks = data
      console.log('data', data);
      
    });
  }

  addTask(){
    this.router.navigate(['./addtask'])
  }
}

interface Task{
  description: string;
  id: string;
  status: string;
  title: string;
}
