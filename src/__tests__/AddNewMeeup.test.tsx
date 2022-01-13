import { mount } from 'enzyme';
import MeetupsStartView from '../components/MeetupsStartView'
import { BrowserRouter } from "react-router-dom";
const meetupData = [
  {
    id: '1', title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },
]
const newMeetup = [
  {
    id: '65', title: 'Yin Yoga', description: 'lets meetup for some Yin Yoga', date: '2021-05-22', time: '17:00', location: 'Slottskogen'
  },
]
const mockAddNewMeetup = jest.fn()

describe('Tests for adding new meetup', () => {

  test('should render a input field for type in a title', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('input[data-test="newMeetup-Title"]').length).toBe(1)
  })
  test('should render a input field for type in a description', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('input[data-test="newMeetup-Description"]').length).toBe(1)
  })
  test('should render a input field for type in a date', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('input[data-test="newMeetup-Date"]').length).toBe(1)
  })
  test('should render a input field for type in a time', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('input[data-test="newMeetup-Time"]').length).toBe(1)
  })
  test('should render a input field for type in a location', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('input[data-test="newMeetup-Location"]').length).toBe(1)
  })
  test('should render a button to add a new meetup', () => {
    const wrapper = mount(<BrowserRouter><MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)

    expect(wrapper.find('button[data-test="newMeetupBtn"]').length).toBe(1)
  })
  test('Should add 1 comment when Click on add button', () => {

    const wrapper = mount(< BrowserRouter > <MeetupsStartView meetups={meetupData} title=""
      description=""
      date=""
      time=""
      location="" /></BrowserRouter>)
    const btn = wrapper.find('button[data-test="newMeetupBtn"]')

    btn.simulate('click')
    setTimeout(() => {
      expect(mockAddNewMeetup.mock.calls.length).toBe(1)
      expect(mockAddNewMeetup.mock.calls[0][0]).toEqual(newMeetup)
    }, 1000)
  })
})