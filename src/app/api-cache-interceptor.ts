import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class ApiCacheInterceptor implements HttpInterceptor {

    private cache = new Map<string,HttpResponse<any>>();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url.replace("http://ergast.com/api/f1","")

        const cachedResponse=this.cache.get(req.url)

        if(cachedResponse)
            return of(cachedResponse)

        return next.handle(req).pipe(
            tap(response => {
                if(response instanceof HttpResponse) {
                    this.cache.set(req.url,response)
                }
            })
        )
    }
}
