import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'search', 
  loadChildren: () =>
  import('./search/search.component').then((m) => m. SearchComponent), 
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
