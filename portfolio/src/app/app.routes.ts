import { Routes } from '@angular/router';
import { MainContent } from './core/main-content/main-content';
import { Imprint } from './shared/components/imprint/imprint';
import { PrivacyPolicy } from './shared/components/privacy-policy/privacy-policy';

export const routes: Routes = [{ path: '', component: MainContent, pathMatch: 'full' },
{ path: 'imprint', component: Imprint },
{ path: 'privacy-policy', component: PrivacyPolicy },
{ path: '**', redirectTo: '' }];
