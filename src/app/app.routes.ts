import { Routes } from '@angular/router';
import { APP_ROUTES, PAGE_TITLE } from '../utils/constant';
import { DetailsComponent } from './details/details.component';
import { ContactPageComponent } from './pages/contact/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/notfound/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: APP_ROUTES.HOME,
        component: HomePageComponent,
        title: PAGE_TITLE.HOME,
    },
    {
        path: APP_ROUTES.CONTACT,
        component: ContactPageComponent,
        title: PAGE_TITLE.CONTACT,
    },
    {
        path: APP_ROUTES.HOME2,
        component: HomePageComponent,
        title: PAGE_TITLE.HOME,
    },
    // Wildcard route placed at the end
    {
        path: '**',
        component: PageNotFoundComponent,
        title: PAGE_TITLE.NOTFOUND
    },
    {
        path: APP_ROUTES.DETAILS,
        component: DetailsComponent,
        title: 'Home details',
    },

];