import {Routes} from '@angular/router';
import {DashboardComponent} from "@app/pages/dashboard/dashboard.component";
import {JournalComponent} from "@app/pages/journal/journal.component";
import {SetsComponent} from "@app/pages/sets/sets.component";
import {CardsComponent} from "@app/pages/cards/cards.component";

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'journal', component: JournalComponent},
    {path: 'sets', component: SetsComponent},
    {path: 'cards', component: CardsComponent}
];
