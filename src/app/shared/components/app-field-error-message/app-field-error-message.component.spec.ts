import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppFieldErrorMessageComponent } from './app-field-error-message.component';

describe('AppFieldErrorMessageComponent', () => {
  let component: AppFieldErrorMessageComponent;
  let fixture: ComponentFixture<AppFieldErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppFieldErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFieldErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
