import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {lastValueFrom, Observable} from "rxjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TemplateService {

  // this.taskChanged = new BehaviorSubject<ToDo[]>(tasks);

  constructor(private http: HttpClient) {
  }

  //Posting a form using httpclient
  //setting headers and params
/*  sendToServer(form: FormGroup): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let registration = new HttpParams()
      .set('name', form.get('name').value)
      .set('email', form.get('email').value);

    return this.http.post<any>('https://csf-day6.herokuapp.com/api/register',
      registration.toString(),
      {headers: header});
  }

  postRegistration(reg: Registration): Promise<ResponseMessage> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams().set('name', reg.name).set('email', reg.email)

    return lastValueFrom(
      this.http.post<ResponseMessage>(URL, params.toString(), {headers})

    )
  }*/

  //regular posting
/*  send() {
    this.dex.toArray((arr: ToDo[]) => {
      // let headers = new HttpHeaders().set('Content-Type', 'Application.Json')
      console.log(JSON.stringify(arr))
      this.http.post('http://localhost:8080/api/tasks', arr)
        .subscribe((res) => {
          console.log(res);
          //need the then here for the clear to take effect
          this.dex.clear()
            .then(() => console.log('was cleared'));
          this.updateTaskList();
        })
    })
  }*/

  //using httpclient to GET
/*  getCustomer(): Promise<Customer> {
    return lastValueFrom(
      // this.http.get<Customer>('http://localhost:8080/api/customer')
      this.http.get<Customer>('https://csf-day6.herokuapp.com/api/customer')
    )
  }

  getCustomerAsObs(): Observable<Customer> {
    // return this.http.get<Customer>('http://localhost:8080/api/customer')
    return this.http.get<Customer>('https://csf-day6.herokuapp.com/api/customer')
  }

  fetch() {
    this.http.get<ToDo[]>('http://localhost:8080/api/tasks')
      .subscribe((todoArr) => {
        console.log(JSON.stringify(todoArr));
        this.taskChanged.next(todoArr);
        this.dex.bulkPut(todoArr);
      })
  }
 */

  //creates the function to be called in the component
  //returns an observable
  //for angular to be placed in SB
/*  getWeather(value: string): Observable<Weather[]> {
    // const url = `http://localhost:8080/api/weather/${value}`
    const url = `/api/weather/${value}`
    return this.http.get<Weather[]>(url)
  }*/


  //helper methods
  private getId() {
    return uuidv4().toString().substring(0, 8);
  }


}
