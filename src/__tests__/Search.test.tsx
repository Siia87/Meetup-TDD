import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import MeetupsStartView from '../components/MeetupsStartView'

const meetupData = [
  {
    id: 1, title: 'Premier league', description: 'lets talk about football', date: '2021-01-22', time: '19:00', location: 'Nya lundenskolans aula'
  }
]

describe('tests for search on meetups', () => {

  test('Search "Premier", should render 1 meetup', () => {
    render(<MeetupsStartView meetups={meetupData} />)

    const wrapper = mount(
      <MeetupsStartView meetups={meetupData} />
    );
    const searchText = "Premier";
    const searchField = wrapper.find('[data-test="search-meetup"]')

    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[data-test="result-meetup"]').length).toBe(1)
  })
  test('Search "Yoga", should render 0 meetup', () => {
    render(<MeetupsStartView meetups={meetupData} />)
    const wrapper = mount(
      <MeetupsStartView meetups={meetupData} />
    );
    const searchText = "Yoga";
    const searchField = wrapper.find('[data-test="search-meetup"]')

    searchField.simulate("change", { target: { value: searchText } })

    expect(wrapper.find('[data-test="result-meetup"]').length).toBe(0);
  })
})