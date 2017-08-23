@Injectable()
export class SampleDataResourceService {
    constructor(private http: Http) { }

    get(): Observable<SampleModel[]> {
        return this.http.get('/api/samples')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw(error.message);
    }
}