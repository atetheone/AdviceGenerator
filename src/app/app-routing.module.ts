import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from './components/advice/advice.component';

const routes: Routes = [
  {path: "", component: AdviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
