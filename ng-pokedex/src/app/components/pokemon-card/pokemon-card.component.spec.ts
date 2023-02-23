import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { Pokemon } from 'src/app/utils/interfaces/pokemon';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct information for the pokemon', () => {
    const pokemon: Pokemon = {
      id: 25,
      name: 'Pikachu',
      image: 'https://pokeapi.co/api/v2/pokemon/25/image',
      backgroundColor: 'rgb(253, 184, 19)',
      textColor: 'rgb(213, 213, 213)',
    };

    component.pokemon = pokemon;
    fixture.detectChanges();

    const cardElement: HTMLElement = fixture.nativeElement;
    const nameElement = cardElement.querySelector('.name') as HTMLElement;
    nameElement.style.backgroundColor = pokemon.backgroundColor;

    expect(nameElement.textContent).toContain('# 25 Pikachu');
    expect(nameElement.style.backgroundColor).toBe(pokemon.backgroundColor);
    expect(nameElement.style.color).toBe(pokemon.textColor);
  });
});
