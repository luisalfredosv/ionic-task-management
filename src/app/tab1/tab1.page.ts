import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private apiServ: ApiService) {}

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
}

interface Task{
  description: string;
  id: string;
  status: string;
  title: string;
}
