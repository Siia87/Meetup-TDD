import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import MeetupsStartView from '../components/MeetupsStartView'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2021-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  }
]

describe('Meetup tests', () => {

  test('Renders meetups component', () => {
    render(<MeetupsStartView meetups={meetupData} />)
  })

  test('Renders a h3 element', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)

    expect(wrapper.find('h3[data-test="meetup-title"]').length).toBe(1)
  })

  test('Renders a button for sign up', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })

  test('Should render the meetup title "Premier league"', () => {
    render(<MeetupsStartView meetups={meetupData} />)
    expect(screen.getByText(meetupData[0].title, { exact: false })).toBeInTheDocument()

  })
  test('Meetupcard renders a textarea', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)
    expect(wrapper.find('[data-test="textfield"]').length).toBe(1)
  })
  test('Renders a button to add a comment', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)
    expect(wrapper.find('button[data-test="addCommentBtn"]').length).toBe(1)
  })

})