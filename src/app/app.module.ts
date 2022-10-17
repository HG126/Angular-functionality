import { FollowersComponent } from './followers/followers.component';
import { RouterModule } from '@angular/router';
import { PostService } from './service/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListService } from './service/author-list.service';
import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorComponent,
    SummaryPipe,
    ContactFormComponent,
    SignupFormComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path : 'followers', component : FollowersComponent},
      {path : 'posts', component : PostComponent},
      {path : '**', component : NotFoundComponent},
    ])
  ],
  providers: [AuthorListService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
