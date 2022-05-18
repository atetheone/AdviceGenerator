import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AdviceGenerator';
  adviceApiUrl = "https://api.adviceslip.com/advice";
  slip!: { id: number, advice: string};


  constructor(
    private http: HttpClient
  )
  async ngOnInit() {
    this.http.get<any>(this.adviceApiUrl)
      .subscribe(
        advice => this.slip = advice.slip,
        error => console.log(`Error: ${error}`)
      )
  }
}
