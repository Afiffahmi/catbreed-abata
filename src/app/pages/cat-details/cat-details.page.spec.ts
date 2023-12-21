import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatDetailsPage } from './cat-details.page';

describe('CatDetailsPage', () => {
  let component: CatDetailsPage;
  let fixture: ComponentFixture<CatDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
