import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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
  updateTask(task):Observable<Task[]>{
    return this.httpClient.put<Task[]>(`http://localhost:5000/tasks/${task.id}`,task,httpOptions)
  }
}
