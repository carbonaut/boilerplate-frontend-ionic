import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldTextComponent } from './field-text.component';

describe('FieldTextComponent', () => {
  let component: FieldTextComponent;
  let fixture: ComponentFixture<FieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldTextComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
