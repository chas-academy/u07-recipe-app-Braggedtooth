import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path: '', component : HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path: 'categories/:id', component : RecipesComponent},
  {path: 'categories/:id/:id', component : RecipeDetailsComponent},
  {path : 'profile', component :ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
