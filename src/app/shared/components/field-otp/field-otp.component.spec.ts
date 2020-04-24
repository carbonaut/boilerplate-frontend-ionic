import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldOtpComponent } from './field-otp.component';

describe('FieldOtpComponent', () => {
  let component: FieldOtpComponent;
  let fixture: ComponentFixture<FieldOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldOtpComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
