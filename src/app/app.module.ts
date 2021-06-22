import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { MobilesComponent } from './categories/mobiles/mobiles.component';
import { LaptopsComponent } from './categories/laptops/laptops.component';
import { WatchesComponent } from './categories/watches/watches.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ExampleComponent } from './example/example.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminnewproductComponent } from './adminnewproduct/adminnewproduct.component';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PagenotfoundComponent,
    CategoriesComponent,
    MobilesComponent,
    LaptopsComponent,
    WatchesComponent,
    ContactusComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ExampleComponent,
    AdminHomeComponent,
    HeaderComponent,
    AdmindashboardComponent,
    AdminordersComponent,
    AdminproductComponent,
    AdminnewproductComponent,
    AdmincustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
