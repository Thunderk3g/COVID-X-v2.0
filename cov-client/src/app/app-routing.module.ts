import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributeNowComponent } from './contribute-now/contribute-now.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'admin-component', component: AdminComponent },
  { path: 'admin-dashboard-component', component: AdminDashboardComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'contribute-now-component', component: ContributeNowComponent },
  { path: 'need-help', component: NeedHelpComponent },
  { path: 'header-component', component: HeaderComponent },
  { path: 'footer-component', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
