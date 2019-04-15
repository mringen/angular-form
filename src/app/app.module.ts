import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
// import { EmployerComponent } from './employer/employer.component';
import { FormerEmployerComponent } from './former-employer/former-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    // EmployerComponent,
    FormerEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
