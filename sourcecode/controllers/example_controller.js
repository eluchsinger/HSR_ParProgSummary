class CounterController {
    constructor(counterService) {
        this.counterService = counterService;
    }

    indexAction(viewRef) {
        // The service returns the model and the
        // view is rendered using the returned model.
        this.counterService.load((model) => {
            this.renderIndexView(viewRef, model);
        });
        $(viewRef).on('click', '[data-click=up]', (e) => {
            this.counterService.up(model) => {
                this.renderIndexView(viewRef, model);
            }
            e.preventDefault();
        });
    }
}