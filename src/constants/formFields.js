export const agent = {
  name: 'agent1',
  email: 'agent@email.com',
  phone: '000-000-0001',
}

// TODO: ADD SERVICE TO BOOKINGPAGE1
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

export const CONTAINER_TYPE = [
  {
    id: 1,
    container_type: '20ST',
  },
  {
    id: 2,
    container_type: '20HC',
  },
  {
    id: 3,
    container_type: '40ST',
  },
]

export const CONTAINERS = [
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

export const CONTAINER_LOCATION = [
  {
    id: 6,
    container_location: 'YARD',
  },
  {
    id: 7,
    container_location: 'RAIL',
  },
  {
    id: 8,
    container_location: 'SAIL',
  },
  {
    id: 9,
    container_location: 'PORT',
  },
  {
    id: 10,
    container_location: 'BERTH',
  },
  {
    id: 11,
    container_location: 'PICKUP',
  },
  {
    id: 12,
    container_location: 'TRANSIT',
  },
  {
    id: 13,
    container_location: 'STORAGE',
  },
  {
    id: 14,
    container_location: 'DELIVERY',
  },
  {
    id: 15,
    container_location: 'WAREHOUSE',
  },
  {
    id: 16,
    container_location: 'INSPECTION',
  },
]

export const BOOKING_STATUS = [
  {
    id: 0,
    booking_status: "XX",
  },
    {
    id: 1,
    booking_status: "PENDING",
  },
    {
    id: 2,
    booking_status: "COMPLETE",
  },
    {
    id: 3,
    booking_status: "CLOSED",
  }
]

export const TEST_TABLE_DATA = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
]

export const ACCOUNT_TYPE = [
  {
    type: 'default',
    key: '0',
  },
  {
    type: 'shipper',
    key: 1,
  },
  {
    type: 'broker',
    key: 2,
  },
  {
    type: 'warehouse',
    key: 3,
  },
  {
    type: 'carrier',
    key: 4,
  },
  {
    type: 'portops',
    key: 5,
  },
]