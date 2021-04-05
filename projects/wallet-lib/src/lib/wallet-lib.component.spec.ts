import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletLibComponent } from './wallet-lib.component';

describe('WalletLibComponent', () => {
  let component: WalletLibComponent;
  let fixture: ComponentFixture<WalletLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
