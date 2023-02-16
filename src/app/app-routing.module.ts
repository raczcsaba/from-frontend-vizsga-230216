import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component'
import { HistoryComponent } from './history/history.component'
import { ToysComponent } from './toys/toys.component'
import { NewPlushieComponent } from './new-plushie/new-plushie.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'toys', component: ToysComponent },
  { path: 'new-plushie', component: NewPlushieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
