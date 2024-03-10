import { sortHeroes } from "./heroes";

const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const sortedHeroes = sortHeroes(heroes);

test("Сортировка героев по уровню здоровья", () => {
    expect(sortedHeroes).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});