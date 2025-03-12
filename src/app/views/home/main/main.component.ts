import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {from, map, Observable, observeOn, Subject, Subscription} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {ProductService} from "../../../shared/services/product.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  // lateData: Promise<string> | null = null;

  // private observable: Observable<number>;
  private subject: Subject<number>;

  private subscription: Subscription | null = null;

  // private promise: Promise<string>;
  constructor(public cardService: CartService,
              private productService: ProductService,
              private modalService: NgbModal) {
    this.subject = new Subject();
    let number: number = 0;
    const interval = setInterval(() => {
      this.subject.next(number++);
    }, 2000);
    const timeOut1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // Observable объект из цифр
    // this.observable = from([1,2,3,4,5])

    // создание Oservable 1 вариант
    // this.observable = new Observable((observer) =>{
    //   let number: number = 0;
    //   const interval = setInterval(() => {
    //     observer.next(number++);
    //   }, 2000);
    //   const timeOut1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeOut2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeOut1);
    //       clearTimeout(timeOut2);
    //     }
    //   }
    // });

    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello');
    //   }, 2000)
    // })
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;
  ngOnInit() {

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello');
    //   }, 3000);
    // })

    // this.subscription = this.observable
    //
    //   .subscribe({
    //   next: (param: number) => {
    //     console.log('subscriber1', param)
    // },
    //   error: (error: string) => {
    //     console.log('Error!!! ' + error);
    //   }
    // })

    // this.promise.then((params:string) => {
    //   console.log(params)
    // })

    // subject
    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber1', param);
          },
          error: (error: string) => {
            console.log('ERROR!!' + error)
          }
        }
      )

  };


  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    this.popupComponent.open();
    // this.modalService.open(this.popup, {});
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {

    // this.observable
    //   .pipe(
    //     map((number) => {
    //       return 'Число ' + number;
    //     })
    //   ).subscribe((param:string) => {
    //   console.log('subscriber2', param)
    // })

    this.subject
      .pipe(
        map((number) => {
          return 'Число ' + number;
        })
      ).subscribe((param: string) => {
      console.log('subscriber2', param)
    });
  };
}
