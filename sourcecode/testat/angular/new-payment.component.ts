import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';
import {AccountsService} from '../../services/accounts.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private sender: AccountViewModel;
  private recipient: AccountViewModel = new AccountViewModel();
  private amount: number = 0;

  constructor(private authSvc: AuthService,
              private accSvc: AccountsService) { }

  ngOnInit() {
    this.sender = new AccountViewModel(this.authSvc.authenticatedUser);
  }

  public recipientChanged(event) {
      this.accSvc.fetchAccountOwner(this.recipient.accountNr)
        .subscribe((nr) => { this.recipient.nr = nr; });
  }
}