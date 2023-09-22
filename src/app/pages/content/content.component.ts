import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://th.bing.com/th/id/R.bf804084f12b29961a52384a1fe47c24?rik=K7rbSWDkra6VIg&pid=ImgRaw&r=0';
  contentTitle: string = 'News title example';
  contentDescription: string = 'News paragraph example.';

  constructor() {}

  ngOnInit(): void {}
}
