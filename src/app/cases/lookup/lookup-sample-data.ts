/** Shared sample data for Lookup demo cases. */

export const DEMO_COUNTRIES = [
  {
    id: '01',
    name: 'USA',
    states: [
      { id: '01-01', name: 'California' },
      { id: '01-02', name: 'Texas' },
      { id: '01-03', name: 'Florida' },
      { id: '01-04', name: 'Hawaii' },
    ],
  },
  {
    id: '02',
    name: 'Australia',
    states: [
      { id: '02-01', name: 'Queensland' },
      { id: '02-02', name: 'New South Wales' },
      { id: '02-03', name: 'Tasmania' },
      { id: '02-04', name: 'Victoria' },
    ],
  },
  {
    id: '03',
    name: 'Canada',
    states: [
      { id: '03-01', name: 'Ontario' },
      { id: '03-02', name: 'Quebec' },
      { id: '03-03', name: 'British Columbia' },
      { id: '03-04', name: 'Alberta' },
    ],
  },
  {
    id: '04',
    name: 'United Kingdom',
    states: [
      { id: '04-01', name: 'England' },
      { id: '04-02', name: 'Scotland' },
      { id: '04-03', name: 'Wales' },
      { id: '04-04', name: 'Northern Ireland' },
    ],
  },
  {
    id: '05',
    name: 'India',
    states: [
      { id: '05-01', name: 'Maharashtra' },
      { id: '05-02', name: 'Uttar Pradesh' },
      { id: '05-03', name: 'Karnataka' },
      { id: '05-04', name: 'Tamil Nadu' },
    ],
  },
  {
    id: '06',
    name: 'Brazil',
    states: [
      { id: '06-01', name: 'Sao Paulo' },
      { id: '06-02', name: 'Rio de Janeiro' },
      { id: '06-03', name: 'Minas Gerais' },
      { id: '06-04', name: 'Bahia' },
    ],
  },
  {
    id: '07',
    name: 'Germany',
    states: [
      { id: '07-01', name: 'Bavaria' },
      { id: '07-02', name: 'Berlin' },
      { id: '07-03', name: 'Hamburg' },
      { id: '07-04', name: 'Hesse' },
    ],
  },
  {
    id: '08',
    name: 'Japan',
    states: [
      { id: '08-01', name: 'Tokyo' },
      { id: '08-02', name: 'Osaka' },
      { id: '08-03', name: 'Kyoto' },
      { id: '08-04', name: 'Hokkaido' },
    ],
  },
] as const;

export const DEMO_ROLES = ['Admin', 'Editor', 'Viewer', 'Manager', 'Support'] as const;

export function createDemoEmployees(count = 200) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Employee #${i + 1}`,
    role: DEMO_ROLES[i % DEMO_ROLES.length],
    email: `employee${i + 1}@acorex.io`,
  }));
}

export function createDemoContacts(count = 50) {
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    text: `Contact #${i + 1}`,
    initials: String(i + 1).slice(-2),
    email: `contact${i + 1}@example.com`,
    role: DEMO_ROLES[i % DEMO_ROLES.length],
  }));
}
