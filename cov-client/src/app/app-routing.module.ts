import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributeNowComponent } from './contribute-now/contribute-now.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NeedHelpComponent } from './need-help/need-help.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'contribute-now-component', component: ContributeNowComponent },
  { path: 'volunteer-component', component: VolunteerComponent },
  { path: 'need-help', component: NeedHelpComponent },
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
