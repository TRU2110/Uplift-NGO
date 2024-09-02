import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'donate', component:DonateComponent},
  {path:'mission', component:MissionComponent},
  {path:'thankyou', component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
