import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';

import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Components
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: '', redirectTo: 'listings', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    ImageCarouselComponent,
    NavComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [SchedulerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
