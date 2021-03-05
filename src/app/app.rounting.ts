import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    children: [
      { path: 'add', component: AddCvComponent, canActivate: [LoginGuard] },
      {
        path: 'updateCv/:id',
        component: UpdateCvComponent,
        canActivate: [LoginGuard],
      },
      { path: ':id', component: DetailCvComponent },
      { path: '', component: CvComponent },
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: '', component: CvComponent },
  { path: 'color/:maCouleur', component: ColorComponent },
  { path: '**', component: CvComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
