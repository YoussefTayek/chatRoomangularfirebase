import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
 listChats: any [] = [];

 chat: Chat = {
   name: 'test name',
   message: ''
 };
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats()
        .subscribe(res => this.listChats = res);
  }

  createNewChat() {
    this.chatService.persitChat(this.chat)
    .then(res => {
        this.chat = {
          name: 'test name',
          message: ''
      };
    })
    .catch();
  }

}
