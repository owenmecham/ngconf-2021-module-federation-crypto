import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-cryptos-search',
  templateUrl: './cryptos-search.component.html',
})
export class CryptosSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr
  ) {}

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    import('../lazy/lazy.component')
      .then((m) => m.LazyComponent)
      .then((comp) => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });
  }
}
