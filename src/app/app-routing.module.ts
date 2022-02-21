import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './headerins/header.component';
import { HeaderconComponent } from './headercon/headercon.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ins', component: HeaderComponent },
  { path: 'conect', component: HeaderconComponent },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
