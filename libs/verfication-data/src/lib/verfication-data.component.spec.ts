import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerficationDataComponent } from './verfication-data.component';

describe('VerficationDataComponent', () => {
  let component: VerficationDataComponent;
  let fixture: ComponentFixture<VerficationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerficationDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerficationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
