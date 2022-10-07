export const agent = {
  name: 'agent1',
  email: 'agent@email.com',
  phone: '000-000-0001',
}

export const service = [
  {
    id: 1,
    name: 'WC',
  },
  {
    id: 2,
    name: 'NE',
  },
  {
    id: 3,
    name: 'EC',
  },
  {
    id: 4,
    name: 'SE',
  },
]

export const voyage = [
  {
    id: 1,
    voyage: 'abc',
  },
  {
    id: 2,
    voyage: 'abd',
  },
  {
    id: 3,
    voyage: 'abe',
  },
]

export const vessel = [
  {
    id: 1,
    vessel: 'ship1',
  },
  {
    id: 2,
    vessel: 'ship2',
  },
  {
    id: 3,
    vessel: 'ship3',
  },
  {
    id: 4,
    vessel: 'ship4',
  },
  {
    id: 5,
    vessel: 'ship5',
  },
]

export const carrier = [
  {
    id: 1,
    name: 'carrier1',
  },
  {
    id: 2,
    name: 'carrier2',
  },
  {
    id: 3,
    name: 'carrier3',
  },
]

export const containerType = [
  {
    id: 1,
    equipment_type: '20ST',
  },
  {
    id: 2,
    equipment_type: '20HC',
  },
  {
    id: 3,
    equipment_type: '40ST',
  },
]

export const container = [
  {
    id: 1,
    container: 'abc123',
  },
  {
    id: 2,
    container: 'def456',
  },
  {
    id: 3,
    container: 'ghi789',
  },
]

export const loadingPort = [
  {
    id: 1,
    name: 'philly',
  },
  {
    id: 2,
    name: 'nyc',
  },
  {
    id: 3,
    name: 'charleston',
  },
]

export const unloadingPort = [
  {
    id: 1,
    name: 'svi',
  },
  {
    id: 2,
    name: 'seoul',
  },
  {
    id: 3,
    name: 'naples',
  },
]

export const statuses = [
  {
    id: 1,
    status: 'pending',
  },
  {
    id: 2,
    status: 'complete',
  },
]

export const bookingChecks = [
  {
    id: 1,
    isChecked: true,
    label: 'documents',
  },
  {
    id: 2,
    isChecked: false,
    label: 'dues',
  },
  {
    id: 3,
    isChecked: true,
    label: 'issues',
  },
]

export const otherData = {
  documents: true,
  money_due: true,
  pickup: '06-25-2020 1200',
  port_cut: '08-28-2020 1200',
  rail_cut: '',
  address: '123 fake street',
  notes: 'afadfdafafafd',
}
