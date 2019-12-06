import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChatPageComponent } from './chat-page/chat-page.component';


const routes: Routes = [
  {
      path: '',
      component: UserComponent,
  },
  {
    path: 'channels',
    component: ChatPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
