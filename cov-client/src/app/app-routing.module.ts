import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributeNowComponent } from './contribute-now/contribute-now.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: LandingPageComponent },
  { path: 'contribute-now-component', component: ContributeNowComponent },
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'header-component', component: HeaderComponent },
  { path: 'footer-component', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
