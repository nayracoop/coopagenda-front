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

import { Header } from './header.component';

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
  ],
  imports: [BrowserModule, NgbModule, FormsModule, DataModelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
