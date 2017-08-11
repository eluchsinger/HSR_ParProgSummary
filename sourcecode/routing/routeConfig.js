let router = new ui.Router({
    rootPath: "/demo3",
    initialRoute: "index",
    routes: {
        "index": () => { controller.indexAction(routerOutletView); }
    }
});