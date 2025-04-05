import {Routes} from '@angular/router';
import {DashboardComponent} from "@app/pages/dashboard/dashboard.component";
import {LayoutComponent} from "@app/layout/layout.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: DashboardComponent}
        ]
    }
];
