import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent implements OnInit {

  recipes: Recipie[] = [
    new Recipie('testowa', 'to tylko test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipie('testowa', 'to tylko test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipie('testowa', 'to tylko test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  ];

  constructor() { }

  ngOnInit() {

  }

}
