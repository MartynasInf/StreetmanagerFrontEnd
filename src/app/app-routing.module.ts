import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/authguard_service/auth.guard';
import { UsersComponent } from './users/users.component';
import { HousesComponent } from './houses/houses.component';
import { NewsComponent } from './news/news.component';
import { PaymentRequestsComponent } from './payment-requests/payment-requests.component';
import { PollsComponent } from './polls/polls.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { PaymentRequestCreateFormComponent } from './payment-request-create-form/payment-request-create-form.component';
import { PaymentRequestDetailsComponent } from './payment-request-details/payment-request-details.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';
import { PollCreationComponent } from './poll-creation/poll-creation.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: "users", component: UsersComponent, canActivateChild: [AuthGuard] },
      { path: "houses", component: HousesComponent },
      { path: "news", component: NewsComponent },
      { path: "paymentRequests", component: PaymentRequestsComponent },
      { path: "polls", component: PollsComponent },
      { path: "statistics", component: StatisticsComponent },
      { path: "advertisements", component: AdvertisementsComponent },
      { path: "paymentOperationCreateForm", component: PaymentRequestCreateFormComponent },
      { path: "paymentRequestDetails/:id", component: PaymentRequestDetailsComponent },
      { path: "pollDetails/:id", component: PollDetailsComponent },
      { path: "paymentOperationCreateForm/edit/:id", component: PaymentRequestCreateFormComponent },
      { path: "pollCreationForm", component: PollCreationComponent},
      { path: "pollCreationForm/edit/:id", component: PollCreationComponent},
      { path: "", redirectTo: "news", pathMatch: "full" }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
