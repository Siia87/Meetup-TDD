import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MeetupCard from '../components/MeetupCard'

const meetupData = [
  {
    id: 1,
    title: 'Bahama Mama Bronzer',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illo eum ducimus, sunt deserunt qui esse facilis dolore perferendis autem necessitatibus aspernatur cumque molestiae distinctio numquam quaerat, velit dolores corporis?',
    date: '2022-05-28',
    time: '18:00'
  },
]
describe('Tests for MeetupCard', () => {

  test('Renders MeetupCard component', () => {
    render(<MeetupCard meetups={meetupData} />)
  })

  test('Renders a h3 element', () => {
    const wrapper = shallow(<MeetupCard />)

    expect(wrapper.find('h3[data-test="meetup-title"]').length).toBe(1)
  })
  test('Renders a button', () => {
    const wrapper = shallow(<MeetupCard />)

    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
})

