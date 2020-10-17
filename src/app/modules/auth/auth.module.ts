import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';





const authRoutes: Routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'join',
  component: SignupComponent
}];
@NgModule({
  declarations: [AuthComponent,
                 SignupComponent,
                 LoginComponent,
                 FooterComponent,
                 HeaderComponent,
                 SidebarComponent
                ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
