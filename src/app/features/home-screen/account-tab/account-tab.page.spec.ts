import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountTabPage } from './account-tab.page';

describe('AccountTabPage', () => {
  let component: AccountTabPage;
  let fixture: ComponentFixture<AccountTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
