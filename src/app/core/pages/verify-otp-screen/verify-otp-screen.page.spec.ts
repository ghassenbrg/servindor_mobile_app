import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyOtpScreenPage } from './verify-otp-screen.page';

describe('VerifyOtpScreenPage', () => {
  let component: VerifyOtpScreenPage;
  let fixture: ComponentFixture<VerifyOtpScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOtpScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOtpScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
