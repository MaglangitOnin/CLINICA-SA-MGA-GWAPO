import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    account: any;

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        // Initialize the account property in the ngOnInit lifecycle hook
        this.account = this.accountService.accountValue;
    }
}
