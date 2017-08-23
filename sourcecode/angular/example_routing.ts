const appRoutes: Routes = [
    {   path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [{
            path: '', canActivateChild: [AuthGuard],
            children: [
            {path:'',component:OverviewComponent},
            {path:'about',component:AboutComponent},
            {path:'**',component:NotFoundComponent}]
    }]}
];