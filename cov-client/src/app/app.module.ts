import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContributeNowComponent } from './contribute-now/contribute-now.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ContributeNowModule } from './contribute-now/contribute-now.module';
import { WindowService } from './common/window/window.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { AppHttpService } from './common/app-http.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContributeNowComponent,
    DashboardComponent,
    LandingPageComponent,
    NeedHelpComponent,
    AdminComponent,
    AdminDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContributeNowModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [WindowService, AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
