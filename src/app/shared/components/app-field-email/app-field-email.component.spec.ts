import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppFieldEmailComponent } from './app-field-email.component';

describe('AppFieldEmailComponent', () => {
  let component: AppFieldEmailComponent;
  let fixture: ComponentFixture<AppFieldEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppFieldEmailComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
