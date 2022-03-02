import { mount } from 'enzyme'
import { BrowserRouter } from "react-router-dom";
import MeetupDetails from '../components/MeetupDetails'


const meetupsData = [
  {
    id: '1', title: 'Premier league', description: 'lets talk about football', date: '2022-01-22', time: '19:00', location: 'Nya lundenskolans aula', comments: [], attending: 3,
  },
  {
    id: '2',
    title: 'Bi odling',
    description: 'lorem ipsum',
    date: '2022-08-24',
    time: '13:00',
    location: 'Stadsbiblioteket',
    comments: [],
    attending: 5,
  },

]
const mockSignUpp = jest.fn()
describe('Tests for signing up on meetups', () => {
  beforeAll(() => {
    localStorage.setItem('events', JSON.stringify(meetupsData))
    window.scrollTo = jest.fn()
  })
  afterAll(() => {
    localStorage.clear()
  })
  test('Should render a form element', () => {

    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    setTimeout(() => {
      expect(wrapper.find('[data-test="attendMeetupForm"]').length).toBe(1)
    }, 1000)

  })
  test('should render a input field for type in your name', () => {
    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    setTimeout(() => {
      expect(wrapper.find('input[data-test="inputName"]').length).toBe(1)
    }, 1000)

  })
  test('should render a input field for type in your email', () => {
    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    setTimeout(() => {
      expect(wrapper.find('input[data-test="inputEmail"]').length).toBe(1)
    }, 1000)

  })
  test('Should render commit button', () => {
    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    setTimeout(() => {
      expect(wrapper.find('button[data-test="commitBtn"]').length).toBe(1)
    }, 1000)
  })

  test('Submit email signup for meetup without @, should create/display error string', () => {

    const expectedText = 'Enter a valid e-mail address'
    const wrongEmail = 'test.com'

    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    const inputEmail = wrapper.find('[data-test="inputEmail"]')

    expect(inputEmail.length).toBe(1)

    inputEmail.simulate('change', { target: { value: wrongEmail } })

    wrapper.find('[data-test="commitBtn"]').simulate('click')
    setTimeout(() => {
      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)

  })

  test('Submit name signup for meetup with only one letter,should create/display error string', () => {
    const expectedText = 'Enter your name'

    const wrongName = 'u'
    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')
    const inputName = wrapper.find('[data-test="inputName"]')

    expect(inputName.length).toBe(1)

    inputName.simulate('change', { target: { value: wrongName } })

    wrapper.find('[data-test="commitBtn"]').simulate('click')

    setTimeout(() => {
      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })


  test('Submit signup for meetup with correct value in inuptfields, name and email.', () => {

    const wrapper = mount(<BrowserRouter>< MeetupDetails meetups={meetupsData} myName='' myEmail='' /></BrowserRouter>)

    const expectedText = 'You are signed up for meetup'
    const correctName = 'Testnamn'
    const correctEmail = 'test@test.com'

    const btn = wrapper.find('button[data-test="sign-up-btn"]')

    btn.simulate('click')

    const inputEmail = wrapper.find('[data-test="inputEmail"]')
    const inputName = wrapper.find('[data-test="inputName"]')

    expect(inputEmail.length).toBe(1)
    expect(inputName.length).toBe(1)

    inputEmail.simulate('change', { target: { value: correctEmail } })
    inputName.simulate('change', { target: { value: correctName } })

    wrapper.find('[data-test="commitBtn"]').simulate('click')
    //expect(mockSignUpp.mock.calls.length).toBe(1)
    // expect(mockSignUpp.mock.calls[0][0]).toEqual(myComment)

    setTimeout(() => {

      expect(wrapper.text().includes(expectedText)).toBe(true)
    }, 1000)
  })
})
