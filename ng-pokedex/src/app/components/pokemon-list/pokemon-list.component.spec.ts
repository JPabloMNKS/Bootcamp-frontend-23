import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PokemonListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of pokemons', () => {
    spyOn(component, 'getPokemonList').and.callThrough();

    component.getPokemons();

    expect(component.getPokemonList).toHaveBeenCalled();
  });

  it('should display 18 pokemons at a time', () => {
    component.searchedPokemons = Array.from({ length: 100 }).map((_, i) => ({
      name: `pokemon-${i + 1}`,
      id: i + 1,
      image: '',
      backgroundColor: '',
      textColor: '',
    }));

    component.pokemonsToDisplay(0, 18);

    expect(component.listOfPokemonsToDisplay.length).toBe(18);
    expect(component.listOfPokemonsToDisplay[0].name).toBe('pokemon-1');
    expect(component.listOfPokemonsToDisplay[17].name).toBe('pokemon-18');
  });

  it('should sort the list of pokemons by id when sortByName is called twice', () => {
    component.listOfPokemonsToDisplay = [
      {
        name: 'Charmander',
        id: 2,
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        backgroundColor: '#A8B820',
        textColor: '#000',
      },
      {
        name: 'Bulbasaur',
        id: 1,
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        backgroundColor: '#F08030',
        textColor: '#fff',
      },
      {
        name: 'squirtle',
        id: 3,
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        backgroundColor: '#6890F0',
        textColor: '#fff',
      },
    ];

    component.sortByName();
    component.sortByName();

    expect(component.listOfPokemonsToDisplay[0].id).toBe(1);
    expect(component.listOfPokemonsToDisplay[1].id).toBe(2);
    expect(component.listOfPokemonsToDisplay[2].id).toBe(3);
  });
});
