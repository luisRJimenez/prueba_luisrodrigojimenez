import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchComponent } from './character-search.component';

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
