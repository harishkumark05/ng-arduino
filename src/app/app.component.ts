import { Component, OnInit } from '@angular/core';
import { SocketService } from './service/socket.service';
import { single, multi } from './data';
import {AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarOpen = false;
  dropDown1 = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(private auth:AuthService) { }

  
  ngOnInit(): void {
    // this.socketService.on('broadcastEvent').subscribe((data: string) => {
    //   this.message = data;
    //   console.log('Received message:', this.message);
    // });
  }

  // sendMessage(): void {
  //   const data = 'Hello from Angular!';
  //   this.socketService.emit('customEvent', data);
  // }  
  toggleDropdown1(){
this.dropDown1 = ! this.dropDown1
  }
  logout(){
    this.auth.logout()
  }
}
