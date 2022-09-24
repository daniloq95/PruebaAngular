import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { EditarComponent } from "./views/editar/editar.component";
import { LoginComponent } from './views/login/login.component';
import { NuevoComponent } from "./views/nuevo/nuevo.component";

const routes: Routes = [

    {path: '', redirectTo : 'Login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'add', component:NuevoComponent},
    {path: 'editar/:id', component:EditarComponent}


];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]