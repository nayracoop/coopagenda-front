import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './auth/welcome.component';
import { SlotList } from './slots/slotList.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'slots', component: SlotList },
  { path: '', redirectTo: '/slots', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
