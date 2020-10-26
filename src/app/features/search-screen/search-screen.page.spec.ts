import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchScreenPage } from './search-screen.page';

describe('SearchScreenPage', () => {
  let component: SearchScreenPage;
  let fixture: ComponentFixture<SearchScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
