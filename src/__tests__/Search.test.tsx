
import { mount } from 'enzyme'
import { BrowserRouter } from "react-router-dom";
import MeetupsStartView from '../components/MeetupsStartView'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2021-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  }
]

describe('tests for search on meetups', () => {

  test('Search "Premier", should render 1 meetup', () => {

    const wrapper = mount(
      <BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>
    );
    const searchText = "Premier";
    const searchField = wrapper.find('[data-test="search-meetup"]')
    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[data-test="result-meetup"]').length).toBe(1)
  })
  test('Search "Yoga", should render 0 meetup', () => {

    const wrapper = mount(
      <BrowserRouter><MeetupsStartView meetups={meetupData} /></BrowserRouter>
    );
    const searchText = "Yoga";
    const searchField = wrapper.find('[data-test="search-meetup"]')

    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[data-test="result-meetup"]').length).toBe(0);
  })
})