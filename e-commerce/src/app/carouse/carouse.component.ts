import { Component, Input, OnInit} from '@angular/core';

interface carouseImage{
  imageSrc:string;
  imageAlt:string
}

@Component({
  selector: 'app-carouse',
  templateUrl: './carouse.component.html',
  styleUrls: ['./carouse.component.css']
})

export class CarouseComponent implements OnInit{

  @Input() images:carouseImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval =3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages():void{
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval);
  }

  selectImage(index:number):void{
    this.selectedIndex =index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick(): void{
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}




