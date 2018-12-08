import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DragComponent} from './drag/drag.component';
import {DisplayPlanComponent} from './display-plan/display-plan.component';
import {MissionControlComponent} from './missioncontrol/missioncontrol.component';
import {AstronautComponent} from './astronaut/astronaut.component';
import {DropComponent} from './drop/drop.component';
import {DropComponentItemComponent} from './drop/drop-component-item/drop-component-item.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    DisplayPlanComponent,
    MissionControlComponent,
    AstronautComponent,
    DropComponent,
    DropComponentItemComponent
  ],
  imports: [BrowserModule],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
