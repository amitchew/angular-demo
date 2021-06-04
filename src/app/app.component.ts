import { Component ,OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Data } from './Store/models/CourseItem.model';
import { State } from './Store/models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  Datas$: Observable<Array<Data>>;

  title = 'Test';
 data: any=[];
 
  constructor(private api: GetApiService, private store: Store<State>) 
  {
    this.api.apiCall().subscribe((data) => {
      console.log(data)
      this.data=data
  })
  this.Datas$ = this.store.select((store) => store.course);

}

ngOnInit(): void {

  this.Datas$ = this.store.select((store) => store.course);
}
}



