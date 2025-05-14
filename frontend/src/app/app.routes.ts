import {Routes} from '@angular/router';
import {DashboardComponent} from "@app/pages/dashboard/dashboard.component";
import {JournalComponent} from "@app/pages/journal/journal.component";
import {SetsComponent} from "@app/pages/sets/sets.component";

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'journal', component: JournalComponent},
    {path: 'ptcg-sets', component: SetsComponent},
    {path: 'tcgp-sets', component: SetsComponent},
];
