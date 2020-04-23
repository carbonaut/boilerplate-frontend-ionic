import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldEmailComponent } from './field-email.component';

describe('FieldEmailComponent', () => {
  let component: FieldEmailComponent;
  let fixture: ComponentFixture<FieldEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldEmailComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
