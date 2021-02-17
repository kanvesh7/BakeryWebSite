import { Component, OnInit } from '@angular/core';
import { BakeryRecipe } from '../bakeryRecipe.model';

@Component({
  selector: 'app-backery-recipe-list',
  templateUrl: './backery-recipe-list.component.html',
  styleUrls: ['./backery-recipe-list.component.css']
})
export class BackeryRecipeListComponent implements OnInit {
  
  bakeryRecipeLists: BakeryRecipe[] = [
    new BakeryRecipe("Cinnamon Roll", "This is Cinnamon Roll", "../../../assets/images/Cinnamon.jpg"),
    new BakeryRecipe("Banana Bread", "This is Banana Bread", "../../../assets/images/bananaBread.jpg"),
    new BakeryRecipe("Chocolate Pastry", "this is a chocklate pastry", "../../../assets/images/ChocolatePastry.jpg")
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

 

}
