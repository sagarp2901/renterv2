import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SchedulerComponent } from '../scheduler/scheduler.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listing: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSchedulerDialog(): void {
    const schedulerDialogRef = this.dialog.open(SchedulerComponent, { data: this.listing });
    schedulerDialogRef.afterClosed().subscribe(() => {
      console.log('Dialog Closed');
    });
  }

}
