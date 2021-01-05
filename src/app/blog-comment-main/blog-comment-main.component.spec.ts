import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentMainComponent } from './blog-comment-main.component';

describe('BlogCommentMainComponent', () => {
  let component: BlogCommentMainComponent;
  let fixture: ComponentFixture<BlogCommentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCommentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
