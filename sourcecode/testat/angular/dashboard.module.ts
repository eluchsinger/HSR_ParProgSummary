import {NgModule, ModuleWithProviders} from '@angular/core';

import {AuthService} from '../auth/services/auth.service';
import {DashboardComponent} from './components/dboard.component';
import {DashboardRoutingModule} from './dboard-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  // declarations (Components / Directives) used
  // from/within the Module
  declarations: [ DashboardComponent ],
  // Other Modules to import (imports the exported 
  // Components/Directives from the other module)
  imports: [ DashboardRoutingModule, RouterModule ],
  // components/Directives (or even Modules)
  // to export (available for other modules; and forRoot() )
  exports: [ ],
  // DI Providers (Services, Tokens, Factories...),
  // may be instantiated multiple times
  providers: [ AuthService  ]
})
export class DashboardModule {
  static forRoot(config?:{}):ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
}}
