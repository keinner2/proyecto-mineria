import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog'
import {MatTabsModule} from '@angular/material/tabs';
import { CdkTableModule} from '@angular/cdk/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {DataSource} from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSortModule,
    LayoutModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule,
    CdkTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSortModule,
    LayoutModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule,
    MatTabsModule,
    CdkTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
