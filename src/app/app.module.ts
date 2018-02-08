import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Added for angular/material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

//Added for popup dialog box
import { MatDialogModule } from '@angular/material';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MatCardModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';


import { MyFormComponent } from './my-form/my-form.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatTabsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
