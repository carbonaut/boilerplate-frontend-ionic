import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldCalendarComponent } from './field-calendar.component';

describe('FieldCalendarComponent', () => {
  let component: FieldCalendarComponent;
  let fixture: ComponentFixture<FieldCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldCalendarComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
