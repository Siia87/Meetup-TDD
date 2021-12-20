import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupDetails from '../components/MeetupDetails'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },
]
const comment = 'Hello, here comes a test comment'
const mockAddComment = jest.fn()

describe('Tests for MeetupDetails', () => {
  test('Renders meetups component', () => {
    render(<MeetupDetails meetups={meetupData} />)
  })
  test('Renders a button for sign up', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} />)
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
  test('Meetupcard renders a textarea', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} />)
    expect(wrapper.find('[data-test="textfield"]').length).toBe(1)
  })
  test('Renders a button to add a comment', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} />)
    expect(wrapper.find('button[data-test="addCommentBtn"]').length).toBe(1)
  })

  test('Should not show a list of comments, if no comments are done', () => {
    const wrapper = mount(<MeetupDetails meetups={meetupData} />)
    expect(wrapper.find('[data-test="listOfComments"]').length).toBe(0)
  })
  test('Should add 1 comment when Click on add button', () => {

    const wrapper = shallow(<MeetupDetails meetups={meetupData} />)
    const btn = wrapper.find('button[data-test="addCommentBtn"]')

    btn.simulate('click')
    expect(mockAddComment.mock.calls.length).toBe(1)
    expect(mockAddComment.mock.calls[0][0]).toEqual(comment)
  })
})