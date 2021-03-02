import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    children: [
      { path: 'add', component: AddCvComponent },
      { path: 'delete/:id', component: DeleteCvComponent },
      { path: ':id', component: DetailCvComponent },
      { path: '', component: CvComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: CvComponent },
  { path: 'color/:maCouleur', component: ColorComponent },
  { path: '**', component: CvComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
