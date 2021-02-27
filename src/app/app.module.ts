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
import { Cv2Component } from './cvTechV2/cv2/cv2.component';
import { Detail2Component } from './cvTechV2/detail2/detail2.component';
import { Item2Component } from './cvTechV2/item2/item2.component';
import { Liste2Component } from './cvTechV2/liste2/liste2.component';
import { Class2Component } from './directive2/class2/class2.component';
import { Style2Component } from './directive2/style2/style2.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';

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
    Cv2Component,
    Detail2Component,
    Item2Component,
    Liste2Component,
    Class2Component,
    Style2Component,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
