import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldPasswordComponent } from './field-password.component';

describe('FieldPasswordComponent', () => {
  let component: FieldPasswordComponent;
  let fixture: ComponentFixture<FieldPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldPasswordComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
