import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validatecanActivate } from './canActivate.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const routes: Routes = [
  { path: '', component: WelcomeComponentComponent }, //for starting point
  { path: 'home', component: WelcomeComponentComponent },
  {
    path: 'departments',
    loadChildren: () =>
      import('./department/department.module').then((m) => m.DepartmentModule), //here we are invoking the ArticleModule class directly
  },
  {
    path: 'students',
    loadChildren: async () =>
     { const m = await import('./students/students.module');
    return m.StudentsModule;},
     canActivate:[validatecanActivate]     
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
