import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DBZComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { addCharacterComponent } from './components/addCharacter/addCharacter.component';

@NgModule({
  declarations: [
    DBZComponent,
    ListDBZComponent,
    addCharacterComponent
  ],
  exports: [
    DBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
