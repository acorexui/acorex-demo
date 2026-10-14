export const DEMO_FIRST_NAMES = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Ethan',
  'Sophia',
  'Mason',
  'Isabella',
  'Lucas',
  'Mia',
  'James',
  'Charlotte',
  'Benjamin',
  'Amelia',
  'Henry',
  'Harper',
  'Alexander',
  'Evelyn',
  'Daniel',
] as const;

export const DEMO_LAST_NAMES = [
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
  'Lee',
] as const;

export function demoPersonName(index: number): { firstName: string; lastName: string } {
  return {
    firstName: DEMO_FIRST_NAMES[index % DEMO_FIRST_NAMES.length],
    lastName: DEMO_LAST_NAMES[Math.floor(index / DEMO_FIRST_NAMES.length) % DEMO_LAST_NAMES.length],
  };
}
