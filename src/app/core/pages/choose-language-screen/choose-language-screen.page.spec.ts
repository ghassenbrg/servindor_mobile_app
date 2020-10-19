import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseLanguageScreenPage } from './choose-language-screen.page';

describe('ChooseLanguageScreenPage', () => {
  let component: ChooseLanguageScreenPage;
  let fixture: ComponentFixture<ChooseLanguageScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLanguageScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseLanguageScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
