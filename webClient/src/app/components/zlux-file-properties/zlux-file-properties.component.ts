

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

declare var require: any;

import {
  NgModule, Component,
  Input, Output, ViewChild, ViewEncapsulation,
  ElementRef, ChangeDetectorRef,
  OnChanges, SimpleChanges, AfterViewChecked, EventEmitter, OnInit, OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { gridcomp } from '../gridcomp/gridcomp.component';
import { ZluxGridModule, ZluxGridComponent, ZluxTableMetadataToColumnsPipe  } from '@zlux/grid';



@Component({
  selector: 'zlux-file-properties',
  templateUrl: 'zlux-file-properties.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ UtilsService]
})

export class zluxusstableComponent {

  constructor(
    private utils: UtilsService, private elemRef: ElementRef, private cd: ChangeDetectorRef) {
  }

}

@NgModule({
  declarations: [zluxusstableComponent, gridcomp],
  imports: [CommonModule, FormsModule, ZluxGridModule],
  exports: [zluxusstableComponent],
  entryComponents: [zluxusstableComponent]
})
export class zluxpropertymodule  { }


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

