import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    this.popupComponent.open();
    // this.modalService.open(this.popup, {});
  }

  ngOnInit(): void {
  }

}
