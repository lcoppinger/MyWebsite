import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ClickComponent } from './d3-click.component';

describe('D3ClickComponent', () => {
  let component: D3ClickComponent;
  let fixture: ComponentFixture<D3ClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
