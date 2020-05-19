import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { ProposalsService } from './proposals.service'
import { SlotsService } from './slots.service'
import { Proposal, Slot} from './interfaces'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    public user: UserService,
    public proposals: ProposalsService,
    public slotService: SlotsService,
  ) {}
  
  slots: Slot[];

  title = 'coopagenda-front';

  public fetchSlots(): void{
    this.slotService.fetchSlots().subscribe(slots => {
      console.log("slots", slots)
      this.slots = slots
    })
  }

  ngOnInit(): void {
    this.fetchSlots();
  }

}
