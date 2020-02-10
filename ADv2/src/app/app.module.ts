import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Components/auth/auth/auth.component';
import { StoresComponent } from './Components/stores/stores.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { StoreOrdersComponent } from './Components/store-orders/store-orders.component';
import { OrderComponent } from './Components/order/order.component';
import { FromTwentyFourPipe } from './Pipes/from-twenty-four.pipe';

const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'stores', component: StoreOrdersComponent },
    { path: 'stores/:id', component: StoresComponent },
    { path: 'order/:id', component: OrderComponent},
    { path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    AuthComponent,
    StoresComponent,
    OrderListComponent,
    StoreOrdersComponent,
    OrderComponent,
    FromTwentyFourPipe
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
