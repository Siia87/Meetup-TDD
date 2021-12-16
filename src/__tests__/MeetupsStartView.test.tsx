import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupsStartView from '../components/MeetupsStartView'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },

]
const comment = 'Hello, here comes a test comment'
const mockAddComment = jest.fn()

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
  test('Should show a list of comments', () => {
    const wrapper = shallow(<MeetupsStartView meetups={meetupData} />)
    expect(wrapper.find('[data-test="listOfComments"]').length).toBe(1)
  })
  test('Should add 1 comment when Click on add button', () => {

    const wrapper = mount(<MeetupsStartView meetups={meetupData} />)
    const btn = wrapper.find('button[data-test="addCommentBtn"]')

    btn.simulate('click')
    expect(mockAddComment.mock.calls.length).toBe(1)
    expect(mockAddComment.mock.calls[0][0]).toEqual(comment)
  })
})
