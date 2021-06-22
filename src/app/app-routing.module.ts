import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnewproductComponent } from './adminnewproduct/adminnewproduct.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { LaptopsComponent } from './categories/laptops/laptops.component';
import { MobilesComponent } from './categories/mobiles/mobiles.component';
import { WatchesComponent } from './categories/watches/watches.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ExampleComponent } from './example/example.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'categories',component:CategoriesComponent,children:[{path:'mobiles',component:MobilesComponent},
{path:'laptops',component:LaptopsComponent},
{path:'watches',component:WatchesComponent}]},
{path:'checkout',component:CheckoutComponent},
{path:'contactus',component:ContactusComponent},
{path:'feedback',component:FeedbackComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'admin-home',component:AdminHomeComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'adminorders',component:AdminordersComponent},
{path:'adminproduct',component:AdminproductComponent},
{path:'adminnewproduct',component:AdminnewproductComponent},
{path:'admincustomer',component:AdmincustomerComponent},
{path:'header',component:HeaderComponent},
{path:'example',component:ExampleComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
