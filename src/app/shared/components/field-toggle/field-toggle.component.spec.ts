import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldToggleComponent } from './field-toggle.component';

describe('FieldToggleComponent', () => {
  let component: FieldToggleComponent;
  let fixture: ComponentFixture<FieldToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldToggleComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
