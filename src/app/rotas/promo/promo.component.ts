import { Component, OnInit, Input, SimpleChanges, } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }


  retorno = [{
    _id: 'shflsaflsjfllsaflsaflsaf',
    uid: 'skjfskajfhsjkafhs',
    displayName: 'Empresa azul',
    location: {
      coordinates: [
        -23.1862825631166,
        -50.6504440011731
      ],
      type: "Point"
    },
    tipo: "SorveteriA",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    promos: [{
      _id: "5da561ec45a2123980952d0d",
      title: "aranha de ferro ",
      about: "brinquedo homem de ferro, brinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    },
    // {
    //   _id: "5da561ec45a2123980952dsd0d",
    //   title: "homem de ferro",
    //   about: "brinquedo homem de ferro",
    //   initPrice: 200,
    //   endPrice: 80,
    //   initDate: new Date("2019-10-15T03:00:00.000Z"),
    //   endDate: new Date("2019-10-23T03:00:00.000Z"),
    //   thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    //   descont: 0.6,
    // },
    // {
    //   _id: "5da561ec45a2123980952dsd0d",
    //   title: "homem de ferro",
    //   about: "brinquedo homem de ferro",
    //   initPrice: 200,
    //   endPrice: 80,
    //   initDate: new Date("2019-10-15T03:00:00.000Z"),
    //   endDate: new Date("2019-10-23T03:00:00.000Z"),
    //   thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    //   descont: 0.6,
    // },
    {
      _id: "5da561ec45a2123980952dsd0d",
      title: "homem de ferro",
      about: "brinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    }]
  },
  {
    _id: 'shflsaflsjfllsaflsaflsaf',
    uid: 'skjfskajfhsjkafhs',
    displayName: 'Empresa azul',
    location: {
      coordinates: [
        -23.1862825631166,
        -50.6504440011731
      ],
      type: "Point"
    },
    tipo: "SorveteriA",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    promos: [{
      _id: "5da561ec45a2123980952d0d",
      title: "aranha de ferro ",
      about: "brinquedo homem de ferro, brinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    },
    // {
    //   _id: "5da561ec45a2123980952dsd0d",
    //   title: "homem de ferro",
    //   about: "brinquedo homem de ferro",
    //   initPrice: 200,
    //   endPrice: 80,
    //   initDate: new Date("2019-10-15T03:00:00.000Z"),
    //   endDate: new Date("2019-10-23T03:00:00.000Z"),
    //   thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    //   descont: 0.6,
    // },
    // {
    //   _id: "5da561ec45a2123980952dsd0d",
    //   title: "homem de ferro",
    //   about: "brinquedo homem de ferro",
    //   initPrice: 200,
    //   endPrice: 80,
    //   initDate: new Date("2019-10-15T03:00:00.000Z"),
    //   endDate: new Date("2019-10-23T03:00:00.000Z"),
    //   thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    //   descont: 0.6,
    // },
    {
      _id: "5da561ec45a2123980952dsd0d",
      title: "homem de ferro",
      about: "brinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    }]
  }
    ,
  {
    _id: 'shflsaflsjfllsaflsaflsaf',
    uid: 'skjfskajfhsjkafhs',
    displayName: 'Empresa azul',
    location: {
      coordinates: [
        -23.1862825631166,
        -50.6504440011731
      ],
      type: "Point"
    },
    tipo: "SorveteriA",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
    promos: [{
      _id: "5da561ec45a2123980952d0d",
      title: "aranha de ferro ",
      about: "brinquedo homem de ferro, brinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferrobrinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    },
    {
      _id: "5da561ec45a2123980952dsd0d",
      title: "homem de ferro",
      about: "brinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    },
    {
      _id: "5da561ec45a2123980952dsd0d",
      title: "homem de ferro",
      about: "brinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    },
    {
      _id: "5da561ec45a2123980952dsd0d",
      title: "homem de ferro",
      about: "brinquedo homem de ferro",
      initPrice: 200,
      endPrice: 80,
      initDate: new Date("2019-10-15T03:00:00.000Z"),
      endDate: new Date("2019-10-23T03:00:00.000Z"),
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oficina2utfpr.appspot.com/o/promocao%2FPT6oPnvN58YTJSTMdlIozu0KvuG3%2Fhomemdeferro?alt=media&token=aaf6372e-d0a1-48ad-8bb0-25eabe4bafd4",
      descont: 0.6,
    }]
  }
  ]
}
