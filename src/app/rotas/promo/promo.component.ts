import { Component, OnInit, Input, SimpleChanges, ViewChild, } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { ApiService } from 'src/app/services/api.service';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  @ViewChild('swipper', { static: false }) usefulSwiper: SwiperComponent;
  public retorno = [];
  config: SwiperOptions = {
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    autoHeight: true,
  };


  constructor(public api: ApiService) {
    api.getData('promos').subscribe(res => {
      this.retorno = res
    })
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
