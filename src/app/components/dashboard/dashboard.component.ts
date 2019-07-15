import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AssetService } from '../../services/asset.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: object;
  assets: any[];

  constructor(
    private assetService: AssetService,
    private alertService: AlertService ) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllAssets();
  }

  public loadAllAssets() {
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
        },
        error => {
          this.alertService.error(error);
        });
  }

}
