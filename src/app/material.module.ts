import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatSnackBarModule

} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ]
})

export class MaterialModule { }
