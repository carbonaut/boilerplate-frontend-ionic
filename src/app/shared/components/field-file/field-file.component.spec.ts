import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldFileComponent } from './field-file.component';

describe('FieldFileComponent', () => {
  let component: FieldFileComponent;
  let fixture: ComponentFixture<FieldFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
