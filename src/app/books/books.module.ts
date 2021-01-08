import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ListComponent as ListBookComponet } from  './list/list.component';
import { CreateComponent as CreateBookComponet } from  './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let routes = [
  { path: 'list', component: ListBookComponet },
  { path: 'edit/:id', component: CreateBookComponet },
  { path: 'create', component: CreateBookComponet },
  { path: '',   redirectTo: '/list', pathMatch: "prefix" },
]

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class BooksModule { }
