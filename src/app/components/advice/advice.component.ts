import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.sass']
})
export class AdviceComponent implements OnInit {
  adviceApiUrl = "https://api.adviceslip.com/advice";
  slip!: { id: number, advice: string};

  hiddenLoader = false;
  constructor(
    private http: HttpClient
  ) {

  }

  async ngOnInit(): Promise<any> {
    this.generateAdvice();
  }

  async generateAdvice() {
    this.hiddenLoader = false;
    await this.http.get<any>(this.adviceApiUrl)
    .subscribe(
      advice => {
        if (advice) {
          this.hiddenLoader = true;
        }
        console.log(JSON.stringify(advice, null, 3))
        this.slip = advice.slip;
      },
      error => console.log(`Error: ${error}`)
    )
  }



}
