/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard',
    },
    {
        id   : 'students',
        title: 'Student services',
        type : 'collapsable',
        icon : 'heroicons_outline:academic-cap',
        children:[
            {
                title: 'Personal details',
                type : 'basic',
                link : '/students',
            },
            {
                title: 'Daily schedule',
                type : 'basic',
                link : '/students',
            },
            {
                title: 'Homeworks',
                type : 'basic',
                link : '/students',
            },
            {
                title: 'Subjects',
                type : 'basic',
                link : '/students',
            },
            {
                title: 'Weekly plan',
                type : 'basic',
                link : '/students',
            },
            {
                title: 'Recorded lessons',
                type : 'basic',
                link : '/students',
            }
        ]
    },
    {
        id   : 'teachers',
        title: 'Teachers',
        type : 'collapsable',
        icon : 'heroicons_outline:user-group',
        children:[
            {
                title: 'Exams',
                type : 'basic',
                link : '/teachers',
            }
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/students'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/students'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/students'
    }
];
