import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCreateSlotContent } from './modal-create-slot/modal-create-slot.component';
import { ModalCreateProposalContent } from './modal-create-proposal/modal-create-proposal.component';
import { NgbdModalComponent, NgbdModalContent } from './ngbd-modal/ngbd-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateSlotContent,
    ModalCreateProposalContent,
    NgbdModalComponent,
    NgbdModalContent // delete after all content is created
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalCreateSlotContent,
    ModalCreateProposalContent,
    NgbdModalContent // delete after all content is created

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
