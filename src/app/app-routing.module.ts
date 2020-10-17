import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full'
  },
  {
  path: 'onboarding',
  component: OnboardingComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
                        .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
