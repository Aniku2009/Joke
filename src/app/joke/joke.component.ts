import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {Joke} from '../joke-list/Joke-class';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('app-joke-list') data: Joke;
}


