import { NgModule } from '@angular/core';
import {
    MatInputModule, MatCardModule,
    MatButtonModule, MatToolbarModule,
    MatExpansionModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatDialogModule, MatSidenavModule, MatListModule, MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule
    ]
})
export class AngularMaterialModule { }
