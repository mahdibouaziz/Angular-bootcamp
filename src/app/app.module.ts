import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsColorComponent } from './fils-color/fils-color.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    GrandChildComponent,
    ChildBComponent,
    ColorComponent,
    FilsColorComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
