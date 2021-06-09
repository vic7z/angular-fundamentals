import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTask():Observable<Task[]>{
    return this.httpClient.get<Task[]>("http://localhost:5000/tasks")
  }

  deleteTask(task):Observable<Task[]>{
      return this.httpClient.delete<Task[]>(`http://localhost:5000/tasks/${task.id}`)
  }
}
