import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldNumberComponent } from './field-number.component';

describe('FieldNumberComponent', () => {
  let component: FieldNumberComponent;
  let fixture: ComponentFixture<FieldNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
