import { Component, Output, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { rejectMessages } from '../../core/util/utils';

@Component({
  selector: 'app-reject-bid',
  templateUrl: './reject-bid.component.html',
  styleUrls: ['./reject-bid.component.scss']
})
export class RejectBidComponent implements OnInit {

  rejectMessages: RejectionMessages[] = [];

  constructor(
    private dialogRef: MatDialogRef<RejectBidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.createMessages();
  }

  ngOnInit() {
  }

  createMessages () {
    const keys = Object.keys(rejectMessages);
    for (let k = 0; k < keys.length; k++) {
      this.rejectMessages.push({
        value: keys[k],
        viewValue: rejectMessages[keys[k]]
      })
    }
  }

  confirm(): void {
    this.dialogRef.close(this.data.selectedMessage);
  }

  dialogClose(): void {
    this.dialogRef.close('CANCEL');
  }
}

export interface RejectionMessages {
  value: string;
  viewValue: string;
}

export interface DialogData {
  selectedMessage: string;
}
