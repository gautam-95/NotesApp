import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from './angular-material.module';

import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesContentComponent } from './notes-content/notes-content.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { NotesReducer } from './ngrx/notes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NotesContentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({notes: NotesReducer}),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
