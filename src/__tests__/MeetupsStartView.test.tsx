import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import MeetupsStartView from '../components/MeetupsStartView'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },
]

describe('Meetup tests', () => {

  test('Renders meetups component', () => {
    render(<BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>)
  })

  test('Renders a h3 element for meetup title', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('h3[data-test="meetup-title"]').length).toBe(1)
  })
  test('Renders a p element for meetup description', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('p[data-test="meetup-description"]').length).toBe(1)
  })
  // test('Renders a p element for meetup location', () => {
  //   const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

  //   expect(wrapper.find('p[data-test="meetup-location"]').length).toBe(1)
  // })
  test('Renders a p element for meetup date', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('p[data-test="meetup-date"]').length).toBe(1)
  })

  test('Check if link "Show more" exists', () => {
    render(<BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>)

    const stringValue = screen.getByText(/Show more/i)
    expect(stringValue).toBeInTheDocument()
  })

  test('Check if link "Show more" is a <Link> element', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('Link[data-test="show-MeetupDetails"]').length).toBe(1)
  })

  test('Should render the meetup title "Premier league"', () => {
    render(<BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>)
    expect(screen.getByText(meetupData[0].title, { exact: false })).toBeInTheDocument()

  })

})

