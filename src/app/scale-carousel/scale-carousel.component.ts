import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-scale-carousel',
  templateUrl: './scale-carousel.component.html',
  styleUrls: ['./scale-carousel.component.css']
})
export class ScaleCarouselComponent implements OnInit,AfterViewInit {
  items:Element[];
  index:number;
  classArr=["donghua-left","donghua-normal","donghua-right"]
  ngAfterViewInit(): void {
    this.index=0;
    this.initItems();
  }

  constructor(public elementRef: ElementRef) {}

  initItems(){
    this.items = this.elementRef.nativeElement.querySelectorAll(".scale-carousel-item");
    this.items[0].classList.add("donghua-left");
    this.items[1].classList.add("donghua-normal");
    this.items[2].classList.add("donghua-right");
  }
  ngOnInit() {

  }
  pre(){
    this.donghuazhixing("left");
  }
  next(){
    // console.log("next");
    // this.items[0].classList.add("donghua-normal");
    // this.items[0].classList.remove( this.items[0].classList.item(0));
      this.donghuazhixing("right");
    
    // this.items[1].classList.add("donghua-normal");
    // this.items[2].classList.add("donghua-right");
  }

  private donghuazhixing(fuhao:string) {
    this.items[0].classList.remove(this.classArr[this.qiehuan(this.index)]);
    this.items[1].classList.remove(this.classArr[this.qiehuan(this.index + 1)]);
    this.items[2].classList.remove(this.classArr[this.qiehuan(this.index + 2)]);
    if(fuhao==="right"){
      this.index = this.qiehuan(this.index + 1);
    }else if(fuhao==="left"){
      this.index = this.qiehuan(this.index - 1);
    }
    this.items[0].classList.add(this.classArr[this.qiehuan(this.index + 0)]);
    this.items[1].classList.add(this.classArr[this.qiehuan(this.index + 1)]);
    this.items[2].classList.add(this.classArr[this.qiehuan(this.index + 2)]);
  }

  qiehuan(num){
    if(num<0){
      return num+3;
    }
    else if(num<3){
      return num;

    }else if(num=>3){
      return num -3;
    }
  }

}
