import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WalletViewsComponent } from './wallet.component';
import { CoreModule } from '../core/core.module';
import { CoreUiModule } from '../core-ui/core-ui.module';

import { SharedModule } from './shared/shared.module';
// import { SidebarModule } from './core/sidebar/sidebar.module';

import { WalletModule, ReceiveComponent, SendComponent, HistoryComponent, AddressBookComponent } from './wallet/wallet.module';
// import { ModalsModule } from './modals/modals.module';

//import { StatusComponent } from './core/status/status.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { StakinginfoComponent } from './overview/widgets/stakinginfo/stakinginfo.component';
import { ColdstakeComponent } from './overview/widgets/coldstake/coldstake.component';

import 'hammerjs';
//import { SnackbarService } from './services/flash-notification.service';

import { routing } from './wallet.routing';

/*const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' } // Catch all route
];
*/



@NgModule({
  declarations: [
    WalletViewsComponent,
    // StatusComponent,
    OverviewComponent,
    SettingsComponent,
    StakinginfoComponent,
    ColdstakeComponent
  ],
  imports: [
    // RouterModule.forChild(routes), // TODO: multiple routes
    routing,
    CommonModule,
    SharedModule,
    // SidebarModule.forRoot(),
    WalletModule.forRoot(),
    // CoreModule.forRoot(),
    // ModalsModule,
    CoreUiModule
  ],
  exports: [
    WalletViewsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    //SnackbarService
  ], /*
  bootstrap: [ AppComponent ] */
})
export class WalletViewsModule {
  constructor() {
  }
}
