import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContributeNowModule,
    FormsModule
  ],
  providers: [WindowService,AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
