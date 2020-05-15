import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCreateSlotContent } from './modal-create-slot/modal-create-slot.component';
import { ModalCreateProposalContent } from './modal-create-proposal/modal-create-proposal.component';
import { NgbdModalComponent } from './ngbd-modal/ngbd-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateSlotContent,
    ModalCreateProposalContent,
    NgbdModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    ModalCreateSlotContent,
    ModalCreateProposalContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
