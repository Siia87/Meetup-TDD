import { render } from '@testing-library/react';
import MeetupsStartView from '../components/MeetupsStartView'

const meetupsData = [
  { id: 1, title: 'Premier league', description: 'lets talk about football', date: '2021-01-22', location: 'Nya lundenskolans aula', time: '19:00' }
]

describe('Event tests', () => {

  test('Renders meetups component', () => {
    render(<MeetupsStartView meetups={meetupsData} />)
  })

})
