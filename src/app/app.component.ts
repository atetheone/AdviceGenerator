import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AdviceGenerator';
  adviceApiUrl = "https://api.adviceslip.com/advice";
  slip!: { id: number, advice: string};


  constructor(
    private http: HttpClient
  ) {
    this.http.get<any>(this.adviceApiUrl)
      .subscribe(
        advice => {
          console.log(JSON.stringify(advice, null, 3))
          this.slip = advice.slip;
        },
        error => console.log(`Error: ${error}`)
      )
  }

}
