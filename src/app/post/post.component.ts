import { PostService } from './../service/post.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts : any = [];
  constructor(private service : PostService) {
    }

    ngOnInit(): void {
      this.get();
    }

   //Get Method
   get()
   {
    this.service.getPost().subscribe(response =>{ 
      this.posts = response;
    }, error=>{
      alert("there is an error");
      console.log(error);
      
    })
   }

   //Post method
   createPost(input : any)
   {
      let post : any = {title : input.value}
      input.value = '';
      this.service.createPost(post).subscribe((response : any) => {
        post['id'] = response['id'];
        this.posts.splice(0 ,0 , post)
      }, error=>{
        alert("there is an error");
        console.log(error);
        
      })

   }

   //Patch Method : this method basically use for few properties updation
   //Put Method : this method use for update the entire property
   updatePost(post : any)
   {
    this.service.updatePost(post).subscribe(response=>{
      console.log(response);
    },error=>{
      alert("there is an error");
      console.log(error);
      
    })
   }
  
   //delete method
   deletePost(post : any)
   {
     this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
     },error=>{
      alert("there is an error");
      console.log(error);
    })
   }
}
