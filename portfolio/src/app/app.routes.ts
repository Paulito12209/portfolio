import { Routes } from '@angular/router';
import { MainContent } from './core/main-content/main-content';

export const routes: Routes = [{ path: '', component: MainContent, pathMatch: 'full' },
// Legal pages kommen später:
// { path: 'imprint', component: ImprintComponent },
// { path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: '**', redirectTo: '' }];
