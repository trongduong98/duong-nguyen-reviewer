import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public isDisplay: boolean = false;
  public title: string = "";
  public image: string = "";
  public list: any = [
    { id: 1, name: "Panorama 01", link: "link 001", image:"https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg" },
    { id: 2, name: "Panorama 02", link: "link 001", image:"https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg" },
    { id: 3, name: "Panorama 03", link: "link 001", image:"https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg" },
    { id: 4, name: "Panorama 04", link: "link 001", image:"https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg" },
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

  public handleShowDialog(item: any) {
    this.isDisplay = true;
    console.log('item.name', item.name);
    console.log('item.image', item.image);
    
    this.title = item.name;
    this.image = item.image;
  }

  public handleCloseDialog(isDisplay: boolean) {
    this.isDisplay = isDisplay;
  }
}
