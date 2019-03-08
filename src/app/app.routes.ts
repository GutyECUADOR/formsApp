import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'data', component: DataComponent },
    { path: 'template', component: TemplateComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

export const appRouting = RouterModule.forRoot(routes);
