import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DataModelModule } from './data/data.module';
import { AppComponent } from './app.component';
import { ProposalForm } from './proposals/proposalForm.component';
import { ProposalItem } from './proposals/proposalItem.component';
import { ProposalList } from './proposals/proposalList.component';
import { ProposalView } from './proposals/proposalView.component';

import { SlotForm } from './slots/slotForm.component';
import { SlotItem } from './slots/slotItem.component';
import { SlotList } from './slots/slotList.component';

import { WelcomeComponent } from './auth/welcome.component';
import { Header } from './header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    Header,
    AppComponent,
    ProposalForm,
    ProposalItem,
    ProposalList,
    ProposalView,
    SlotForm,
    SlotItem,
    SlotList,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    DataModelModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
