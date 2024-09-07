import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadeHeaderComponent } from './pade-header.component';

describe('PadeHeaderComponent', () => {
  let component: PadeHeaderComponent;
  let fixture: ComponentFixture<PadeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
