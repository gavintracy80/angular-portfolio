import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: IntroComponent, data: {
      animation: {
        value: 'intro',
      }
    }
  },
  {
    path: 'about-me', component: AboutMeComponent, data: {
      animation: {
        value: 'about',
      }
    }
  },
  {
    path: 'projects', component: ProjectsComponent, data: {
      animation: {
        value: 'projects',
      }
    }
  },
  {
    path: 'contact', component: ContactComponent, data: {
      animation: {
        value: 'contact',
      }
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutMeComponent, IntroComponent, ProjectsComponent, ContactComponent]
