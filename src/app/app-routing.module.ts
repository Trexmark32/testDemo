import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'converter', component: ConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
