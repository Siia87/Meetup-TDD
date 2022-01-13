import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupsStartView from '../components/MeetupsStartView'
import { IMeetups } from '../models/meetups'
import { BrowserRouter } from "react-router-dom";
import AddNewMeetup from '../components/NewMeetup'

const meetupData = [
  {
    id: '1', title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  },
]
const newMeetup: IMeetups =
{
  id: '654afg345',
  title: 'mockNewMeetup',
  description: 'lets meetup for some Yin Yoga',
  date: '2021-05-22',
  time: '17:00',
  location: 'Slottskogen'
}

const incorrectNewMeetup: IMeetups =
{
  id: '6',
  title: 'mockNewMeetup',
  description: '',
  date: '2021-05-22',
  time: '17:00',
  location: 'Slottskogen'
}

const mockNewMeetup = jest.fn()


describe('Tests for adding new meetup', () => {
  test('Renders addNewMeetup component', () => {
    render(<AddNewMeetup
      onClick={mockNewMeetup}
      title=""
      setTitle={() => { }}
      description=""
      setDescription={() => { }}
      date=""
      setDate={() => { }}
      time=""
      setTime={() => { }}
      location=""
      setLocation={() => { }}
      errorText={true}
    />)
  })

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
  test('Should add 1 new meetup when click on commit button', () => {
    const wrapper = shallow(
      <AddNewMeetup
        onClick={mockNewMeetup}
        title=""
        setTitle={() => { }}
        description=""
        setDescription={() => { }}
        date=""
        setDate={() => { }}
        time=""
        setTime={() => { }}
        location=""
        setLocation={() => { }}
        errorText={true}
      />
    )

    const btn = wrapper.find('button[data-test="newMeetupBtn"]')
    const titleElement = wrapper.find('input[data-test="newMeetup-Title"]')
    titleElement.simulate("change", { target: { value: newMeetup.title } })

    const descriptionElement = wrapper.find('input[data-test="newMeetup-Description"]')
    descriptionElement.simulate("change", {
      target: { value: newMeetup.description }
    })

    const dateElement = wrapper.find('input[data-test="newMeetup-Date"]')
    dateElement.simulate("change", { target: { value: newMeetup.date } })

    const timeElement = wrapper.find('input[data-test="newMeetup-Time"]')
    timeElement.simulate("change", { target: { value: newMeetup.time } })

    const locationElement = wrapper.find('input[data-test="newMeetup-Location"]')
    locationElement.simulate("change", {
      target: { value: newMeetup.location }
    })

    btn.simulate('click')
    setTimeout(() => {
      expect(mockNewMeetup.mock.calls.length).toBe(1)
      const values = mockNewMeetup.mock.calls[0][0]
      expect(mockNewMeetup.mock.calls[0][0]).toEqual(newMeetup)
      expect(values.title).toBe(newMeetup.title)
      expect(values.description).toBe(newMeetup.description)
      expect(values.date).toBe(newMeetup.date)
      expect(values.time).toBe(newMeetup.time)
      expect(values.location).toBe(newMeetup.location)

    }, 1000)
  })
  test('Should give errortext, when not all the fields is filled in. When try to add a new meetup', () => {
    const wrapper = shallow(
      <AddNewMeetup
        onClick={mockNewMeetup}
        title=""
        setTitle={() => { }}
        description=""
        setDescription={() => { }}
        date=""
        setDate={() => { }}
        time=""
        setTime={() => { }}
        location=""
        setLocation={() => { }}
        errorText={true}
      />
    )
    const expectedText = 'You did´nt fill in all the fields'
    const btn = wrapper.find('button[data-test="newMeetupBtn"]')
    const titleElement = wrapper.find('input[data-test="newMeetup-Title"]')
    titleElement.simulate("change", { target: { value: incorrectNewMeetup.title } })

    const descriptionElement = wrapper.find('input[data-test="newMeetup-Description"]')
    descriptionElement.simulate("change", {
      target: { value: incorrectNewMeetup.description }
    })

    const dateElement = wrapper.find('input[data-test="newMeetup-Date"]')
    dateElement.simulate("change", { target: { value: incorrectNewMeetup.date } })

    const timeElement = wrapper.find('input[data-test="newMeetup-Time"]')
    timeElement.simulate("change", { target: { value: incorrectNewMeetup.time } })

    const locationElement = wrapper.find('input[data-test="newMeetup-Location"]')
    locationElement.simulate("change", {
      target: { value: incorrectNewMeetup.location }
    })

    btn.simulate('click')
    setTimeout(() => {
      expect(mockNewMeetup.mock.calls.length).toBe(1)
      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })
})
