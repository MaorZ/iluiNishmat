import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MishnayotComponent } from './pages/mishnayot/mishnayot.component';

const routes: Routes = [
  {
    path: '',
    component: MishnayotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
