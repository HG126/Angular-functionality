import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() effect : boolean = false;
  @Output() change = new EventEmitter;
  i = 0;

  title = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
  constructor() { }

  buttonEffect()
  {
    this.i+= (this.effect) ? -1 : 1;
    this.effect = !this.effect;
    this.change.emit(this.effect);
  }

}
