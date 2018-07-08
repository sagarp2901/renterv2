import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  scheduleForm: FormGroup;

  days = [];
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  timings = ['9:00 A.M.', '10:00 A.M.', '11:00 A.M.', '12:00 Noon', '1:00 P.M.', '2:00 P.M.', '3:00 P.M.', '4:00 P.M.', '5:00 P.M.'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SchedulerComponent>,
    @Inject(MAT_DIALOG_DATA) public listing: any) {
    this.scheduleForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      day: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.days = this.getNextAvailableDays(5);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getNextAvailableDays(max): Array<any> {
    const availableDays = [];
    for (let day = 0; day < max; day++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      availableDays[availableDays.length] =
        [date.getDate(), this.monthNames[date.getMonth()], date.getFullYear()].join(' '), date.toISOString();
    }
    return availableDays;
  }

  submitSchedule() {
    console.log('Schedule Submitted');
    // Close dialog after successful submit
    this.closeDialog();
  }
}
