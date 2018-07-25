import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { ElementRef } from '@angular/core';


// import * as $ from 'jquery';
// import *as Swiper from "../../../node_modules/swiper/dist/js/swiper";
@Component({
  selector: 'app-myswiper',
  templateUrl: './myswiper.component.html',
  styleUrls: ['./myswiper.component.css']
})
export class MyswiperComponent implements OnInit,AfterViewInit{
  constructor(public element: ElementRef) {}
  ngAfterViewInit(): void {
  
  }
  array = [ "../../assets/imgs/banner1.jpg","../../assets/imgs/banner2.jpg","../../assets/imgs/banner3.jpg"];
  // array =[1,2,3,4];
  effect = 'scrollx';
  // NzCarouselComponent 
  
  // greetDiv: ElementRef;
  @ViewChild('carousel')
  carousel:NzCarouselComponent;
  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 1000);
  }
  


}
