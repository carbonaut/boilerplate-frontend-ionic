import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldValidationIconComponent } from './field-validation-icon.component';

describe('FieldValidationIconComponent', () => {
  let component: FieldValidationIconComponent;
  let fixture: ComponentFixture<FieldValidationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldValidationIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldValidationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
