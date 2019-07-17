import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AssetService, AlertService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private currentUser: any = {};
  public assets: any[];
  public loading = false;

  constructor(
    private assetService: AssetService,
    private alertService: AlertService ) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllAssets();
  }

  public loadAllAssets() {
    this.loading = true;

    this.assetService.getAllAssets(this.currentUser.roles[0].companyId)
      .pipe(first())
      .subscribe(
        data => {
          this.getAssetsDetails(data);
        },
        error => {
          this.alertService.error(error);
        });
  }

  private getAssetsDetails(assetsList: Array<string>) {
    this.assetService.getAssetsDetails(assetsList)
      .pipe(first())
      .subscribe(
        data => {
          this.assets = data;
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
        });
  }

}
