import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class APIConnector {
    isShowModal = false;
    constructor(
        private http: Http,
        private router: Router,
    ) { }

    requestAPI(method: string, _uri: string, _data: Object = null): Observable<any> {
        const API_PATH = environment.apiPath;
        let uri = _uri;
        let data = _data;

        const options = new RequestOptions();
        if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
            if (data) {
                uri += '?';
                for (var key in data) {
                    if (data[key])
                        uri += `${key}=${data[key]}&`;
                }
                uri = uri.slice(0, -1);
            }
            data = null;
        } else if (!data) {
            data = {};
        }
        const request: Observable<any> = !data ? this.http[method](API_PATH + uri, options) : this.http[method](API_PATH + uri, data, options);
        return request.map(res => this.completeRequest(res, 'extractData')).catch(err => this.completeRequest(err, 'handleError'));
    }

    private completeRequest(res, callback) {
        return this[callback](res);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = err.message ? err.message : err.toString();
        } else {
            errMsg = 'Something went wrong!';
        }
        return Observable.throw(errMsg);
    }
    

}


