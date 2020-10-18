import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetStartedScreenPage } from './get-started-screen.page';

describe('GetStartedScreenPage', () => {
  let component: GetStartedScreenPage;
  let fixture: ComponentFixture<GetStartedScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetStartedScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
