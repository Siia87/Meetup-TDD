import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import MeetupDetails from '../components/MeetupDetails'

const meetupData = [
  {
    id: "1",
    title: 'Premier league',
    description: 'lets talk about football',
    date: '2021-01-22',
    time: '19:00',
    location: 'Nya lundenskolans aula',
    comments: [],
    attending: 0,
  },
]

const myComment = 'Hello, here comes a test comment'
const myRating = 5
const mockAddComment = jest.fn()

describe('Tests for MeetupDetails', () => {
  test('Renders meetup details component', () => {
    render(<BrowserRouter><MeetupDetails meetups={meetupData} myName='' myEmail='' /></BrowserRouter>)
  })
  test('Renders a button for sign up', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} myName='' myEmail='' />)
    expect(wrapper.find('button[data-test="sign-up-btn"]').length).toBe(1)
  })
  test('Renders a textarea', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} myName='' myEmail='' />)
    expect(wrapper.find('[data-test="textfield"]').length).toBe(1)
  })
  test('Renders a rating element for rating', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} myName='' myEmail='' />)
    expect(wrapper.find('[data-test="rating-stars"]').length).toBe(1)
  })

  test('Renders a button to add a comment', () => {
    const wrapper = shallow(<MeetupDetails meetups={meetupData} myName='' myEmail='' />)
    expect(wrapper.find('button[data-test="addCommentBtn"]').length).toBe(1)
  })
  test('Should add rating event if comment field is empty', () => {
    const wrapper = mount(<BrowserRouter><MeetupDetails meetups={meetupData} myName='' myEmail='' /></BrowserRouter>)
    const btn = wrapper.find('button[data-test="addCommentBtn"]')

    btn.simulate('click')
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(1)
      expect(mockAddComment.mock.calls[0][0]).toEqual(myRating)
    }, 1000)
  })
  test('Should add 1 comment, when Click on add button', () => {

    const wrapper = mount(<BrowserRouter><MeetupDetails meetups={meetupData} myName='' myEmail='' /></BrowserRouter>)
    const btn = wrapper.find('button[data-test="addCommentBtn"]')

    btn.simulate('click')
    setTimeout(() => {
      expect(mockAddComment.mock.calls.length).toBe(1)
      expect(mockAddComment.mock.calls[0][0]).toEqual(myComment)
    }, 1000)
  })
})

