import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
    protected baseUrl = `${environment.urlApi}`;

    constructor(private httpClient: HttpClient) { }



}

