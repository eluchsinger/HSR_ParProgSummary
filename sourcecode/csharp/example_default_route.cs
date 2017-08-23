app.UseMvc(routes => {
    routes.MapRoute(
        name: "default",
        template: "{controller=Home}/{action=Index}/{id:int?}");
    )
    routes.MapRoute(
        name: "default2",
        template: "{controller}/{action}/{id?}",
        default: new {controller="Home", action="Index"},
        constraints: new {id=new IntRouteConstraint()});
});