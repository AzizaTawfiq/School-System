import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StudentsComponent } from 'app/modules/admin/students/students.component';

const studentsRoutes: Route[] = [
    {
        path     : '',
        component: StudentsComponent
    }
];

@NgModule({
    declarations: [
        StudentsComponent
    ],
    imports     : [
        RouterModule.forChild(studentsRoutes)
    ]
})
export class StudentsModule
{
}
