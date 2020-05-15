import { Component } from '@angular/core';
import { UserService } from './user.service'
import { ProposalsService } from './proposals.service'
import { SlotsService } from './slots.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    public user: UserService,
    public proposals: ProposalsService,
    public slots: SlotsService,
  ) {}
  
  title = 'coopagenda-front';
}
