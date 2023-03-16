import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
// @ts-ignore
import * as PAN from 'panolens';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('PanoViewer') $el: ElementRef<HTMLElement> | undefined;
  viewer!: any;
  ngOnInit() {}
  ngAfterViewInit() {
    this.createViewer();
    // const viewer = new Viewer({
    //   container: this.$el.nativeElement,
    //   panorama:
    //     'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
    //   loadingImg:
    //     'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
    //   defaultLat: 0.3,
    //   touchmoveTwoFingers: true,
    //   captureCursor: true,
    //   mousewheelCtrlKey: true,
    //   // mousewheelCtrlKey : false
    //   navbar: []
    // });
  }

  createViewer() {
    if (this.$el) {
      const panorama = new PAN.ImagePanorama(
        'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg'
      );
      // const panorama = new PAN.ImagePanorama('../assets/images/panorama.jpg');
      const viewer = new PAN.Viewer({
        container: this.$el.nativeElement
      });
      viewer.add(panorama);
      console.log(viewer);
    }
  }
}
