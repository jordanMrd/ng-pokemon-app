import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpokemonComponent } from './editpokemon.component';

describe('EditpokemonComponent', () => {
  let component: EditpokemonComponent;
  let fixture: ComponentFixture<EditpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
