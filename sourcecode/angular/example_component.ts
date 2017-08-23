@Component( { ... })
export class CounterComponent implements OnInit, OnDestroy {
    ngOnInit() { console.log("OnInit"); }
    ngOnDestroy() {console.log("OnDestroy"); }
}