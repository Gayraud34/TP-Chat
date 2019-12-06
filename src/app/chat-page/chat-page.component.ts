import { Component, OnInit } from '@angular/core';
// import { MessagesService } from '../message.service';
import { Chat } from '../chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  chats: Chat[]
  currentChat: any
  currentUser: any;
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentChat=localStorage.getItem("Chat");
    this.currentUser=localStorage.getItem("User");
  
    // if (!this.msg) {
    //       this.router.navigate(['/']);
    //    } else {
    //         this.msg.getChat().subscribe(
    //           (chats: Chat[]) => this.chats = chats
    //         )
    //       }
    //   }
  
      // goTo(){
      //   localStorage.setItem("Chat", this.currentChat)
      // }
  
      // sendMessage(content: string){
      //     this.currentChat.text= content
  
      }

   
  
  }
