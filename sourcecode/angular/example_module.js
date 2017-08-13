@NgModule({
    imports: [
        // Other modules needed by 
        // components in this module
        CommonModule,
        ForeignModule.forChild({ config })
    ],
    // The view classes 
    // that belong to this module
    declarations: [] 
})
export class CoreModule { }