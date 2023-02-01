import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorelacionalComponent } from './norelacional.component';

describe('NorelacionalComponent', () => {
  let component: NorelacionalComponent;
  let fixture: ComponentFixture<NorelacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorelacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorelacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
