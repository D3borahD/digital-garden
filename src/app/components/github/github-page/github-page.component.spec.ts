import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPageComponent } from './github-page.component';

describe('GithubPageComponent', () => {
  let component: GithubPageComponent;
  let fixture: ComponentFixture<GithubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
