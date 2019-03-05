import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component';
import {PlanetsListComponent} from "./planets-list/planets-list.component";
import {ItemComponent} from "./planets-list/item/item.component";
import {AboutusComponent} from "./aboutus/aboutus.component";


const routes: Routes = [
    {path: "", component: HomeComponent },
    {path: "list", component: PlanetsListComponent},
    {path: "item", component: ItemComponent},
    {path: "aboutus", component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
