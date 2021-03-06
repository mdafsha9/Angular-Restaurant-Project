import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginRestoComponent } from './login-resto/login-resto.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';


const routes: Routes = [
  {path:'add', component:AddRestoComponent},
  {path:'list', component:ListRestoComponent},
  {path:'update', component:UpdateRestoComponent},
  {path:'login', component:LoginRestoComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
