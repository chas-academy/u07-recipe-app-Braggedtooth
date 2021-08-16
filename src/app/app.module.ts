import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthInterceptor } from './services/shared/auth.interceptor.service';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
