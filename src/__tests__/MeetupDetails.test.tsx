import { render } from '@testing-library/react';
import MeetupDetails from '../components/MeetupDetails'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },
]

describe('Tests for MeetupDetails', () => {
  test('Renders meetups component', () => {
    render(<MeetupDetails meetups={meetupData} />)
  })
})