import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TeachersComponent } from 'app/modules/admin/teachers/teachers.component';

const teachersRoutes: Route[] = [
    {
        path     : '',
        component: TeachersComponent
    }
];

@NgModule({
    declarations: [
        TeachersComponent
    ],
    imports     : [
        RouterModule.forChild(teachersRoutes)
    ]
})
export class TeachersModule
{
}
