import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelocomeComponent } from './welcome/welocome.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: '', component: WelocomeComponent }, //for starting point
  { path: 'home', component: WelocomeComponent },
  { path: 'departments', component: DepartmentListComponent }, //for department list
  {
    path: 'departments/:id', // //here :id is a placeholder
    component: DepartmentDetailsComponent,
    children: [
      { path: 'departments/:id/child1', component: Child1Component },
      { path: 'departments/:id/child2', component: Child2Component },
    ],
  },
  { path: 'students', component: StudentListComponent }, //for students list
  {
    path: 'article',
    loadChildren: () =>
      //implementing lazy loading
      import('./article/article.module').then((m) => m.ArticleModule), //here we are invoking the ArticleModule class directly
  },
  { path: '**', component: PageNotFoundComponent }, //for invalid address given by the user
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  StudentListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
  Child1Component,
  Child2Component,
];
