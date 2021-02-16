import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BakeryProductsComponent } from './bakery-products/bakery-products.component';
import { BakeryListComponent } from './bakery-products/bakery-list/bakery-list.component';
import { BakeryEditComponent } from './bakery-products/bakery-edit/bakery-edit.component';
import { BackeryRecipeComponent } from './backery-recipe/backery-recipe.component';
import { BackeryRecipeListComponent } from './backery-recipe/backery-recipe-list/backery-recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BakeryProductsComponent,
    BakeryListComponent,
    BakeryEditComponent,
    BackeryRecipeComponent,
    BackeryRecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
