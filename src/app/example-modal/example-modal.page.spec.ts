import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleModalPage } from './example-modal.page';

describe('ExampleModalPage', () => {
  let component: ExampleModalPage;
  let fixture: ComponentFixture<ExampleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
