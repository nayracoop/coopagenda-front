import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCreateSlotComponent } from './modal-create-slot/modal-create-slot.component';
import { ModalCreateProposalComponent } from './modal-create-proposal/modal-create-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateSlotComponent,
    ModalCreateProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
