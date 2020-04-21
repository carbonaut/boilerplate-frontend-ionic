import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedExampleComponent } from './shared-example.component';

describe('SharedExampleComponent', () => {
  let component: SharedExampleComponent;
  let fixture: ComponentFixture<SharedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedExampleComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
