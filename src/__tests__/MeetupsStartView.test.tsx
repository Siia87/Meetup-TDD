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

  test('Renders a h3 element', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('h3[data-test="meetup-title"]').length).toBe(1)
  })

  test('Should render the meetup title "Premier league"', () => {
    render(<BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>)
    expect(screen.getByText(meetupData[0].title, { exact: false })).toBeInTheDocument()

  })



})
