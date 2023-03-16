import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public list: any = [
    { id: 1, name: "name 001", link: "link 001", image:"iamge 001" },
    { id: 2, name: "name 001", link: "link 001", image:"iamge 001" },
    { id: 3, name: "name 001", link: "link 001", image:"iamge 001" },
    { id: 4, name: "name 001", link: "link 001", image:"iamge 001" },
    { id: 5, name: "name 001", link: "link 001", image:"iamge 001" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(eventName: string) {
    switch(eventName) {
      case 'facebook':
        window.open("https://www.facebook.com/NguyenTrongDuong.CaptainNui");
        break;
      case 'tiktok':
        window.open("https://www.tiktok.com/@duongnguyenreviewer");
        break;
      default:
        break;
    }
  }
}
