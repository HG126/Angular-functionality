import { Component, OnInit } from '@angular/core';
import { AuthorListService } from '../service/author-list.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors : any;
  constructor(private authorService : AuthorListService) {
    //this.authors = this.authorService.getListAuthor();  --> This line also works
   }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor()
  {
    this.authors = this.authorService.getListAuthor();
  }


}
