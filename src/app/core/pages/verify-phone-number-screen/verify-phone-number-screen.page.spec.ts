import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyPhoneNumberScreenPage } from './verify-phone-number-screen.page';

describe('VerifyPhoneNumberScreenPage', () => {
  let component: VerifyPhoneNumberScreenPage;
  let fixture: ComponentFixture<VerifyPhoneNumberScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPhoneNumberScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyPhoneNumberScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
