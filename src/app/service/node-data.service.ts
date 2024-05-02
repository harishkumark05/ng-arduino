import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>('https://arduinorabbit.onrender.com/arduinoArr')
  }

  sendEmail(data:any){
    return this.http.post<any>('https://arduinorabbit.onrender.com/send-email', data)
  }
}
