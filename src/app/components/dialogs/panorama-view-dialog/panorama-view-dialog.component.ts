import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, VERSION, ElementRef, ViewChild } from '@angular/core';
// @ts-ignore
import * as PAN from 'panolens';
@Component({
  selector: 'app-panorama-view-dialog',
  templateUrl: './panorama-view-dialog.component.html',
  styleUrls: ['./panorama-view-dialog.component.scss']
})
export class PanoramaViewDialogComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('PanoViewer') $el: ElementRef<HTMLElement> | undefined;
  viewer!: any;
  @Input() public isDisplay: boolean = false;
  @Input() public title: string = "";
  @Input() public image: string = "";
  @Output() handleCloseDialog = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.createViewer();
  }
  createViewer() {
    if (this.$el) {
      const panorama = new PAN.ImagePanorama(this.image);
      const viewer = new PAN.Viewer({
        container: this.$el.nativeElement
      });
      viewer.add(panorama);
    }
  }

  public handleClose() {
    this.handleCloseDialog.emit(false);
  }
}
