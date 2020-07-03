import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.book={
      id:0,
      title:null,
      author:null,
      numberOfPages:0,
      publishedAt:null
    }
  }
submit(){
  if(this.service.book.id == 0){
    this.service.postBook().subscribe(res=>{
      this.service.getAllBooks()
    },
    err=>{
        console.log(err)
    })
  }
  
  else{
    this.service.putBook().subscribe(res=>{
      this.service.getAllBooks()
    },
    err=>{
        console.log(err)
    })
  }
  }
   

}
