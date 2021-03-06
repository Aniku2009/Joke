import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Joke} from '../joke-list/Joke-class';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent  {
  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
