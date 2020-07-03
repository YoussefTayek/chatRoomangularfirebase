import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Crib } from '../crib';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();
constructor(private http: HttpClient) { }


getAllCribs() {
  return this.http.get<Crib[]>('data/cribs.json').pipe(map(cribs => cribs ));
}

addCrib(data) {
  data.image = 'default-crib';
  this.newCribSubject.next(data);
}
}
