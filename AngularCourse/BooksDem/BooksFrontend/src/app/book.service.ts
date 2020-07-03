import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string = "https://localhost:44353/api/Books"
  books:Book[];
  book:Book;
  constructor(private http:HttpClient) { }
    
    getAllBooks()
    {
        this.http.get(this.url).toPromise().then(
        res=>{
          this.books = res as Book[];
        }
      )  
    }

    postBook(){
       return this.http.post(this.url,this.book);
    }
    
    getBook(id){
      return this.http.get(this.url+"/"+id);
   }
 
    putBook(){
      return this.http.put(this.url+"/"+this.book.id,this.book);
   }
  
    deleteBook(id){
      return this.http.delete(this.url+"/"+id);
  }
}
