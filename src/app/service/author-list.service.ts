import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorListService {

  constructor() { }

  getListAuthor()
  {
    return ['author1', 'author2', 'author3'];
  }
}
