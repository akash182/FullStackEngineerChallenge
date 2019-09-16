import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatCardModule,
        MatToolbarModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatChipsModule,
        MatSortModule,
        MatTabsModule,
        MatIconModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const modules=[HttpClientModule,FormsModule,ReactiveFormsModule,MatIconModule,FlexLayoutModule,MatTabsModule,MatSortModule,MatButtonModule,MatChipsModule,MatTooltipModule,MatDialogModule,MatDatepickerModule,MatSnackBarModule, MatInputModule,MatNativeDateModule , MatPaginatorModule,MatCheckboxModule,MatMenuModule,MatToolbarModule,MatSelectModule,MatCardModule,MatTableModule,MatAutocompleteModule, MatProgressSpinnerModule];
@NgModule({
  imports: modules,
  exports: modules,
})
export class ImportsModule{ }