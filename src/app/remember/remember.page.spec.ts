import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RememberPage } from './remember.page';

describe('RememberPage', () => {
  let component: RememberPage;
  let fixture: ComponentFixture<RememberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RememberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
