import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'like';

  post = {
    isFavorite : false
  }

  onClick(output : any)
  {
    console.log("output decorator works : ", output );
  }
}
