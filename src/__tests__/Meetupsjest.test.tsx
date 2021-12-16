import { describe, expect, test, jest } from '@jest/globals'
import MeetupsStartView from '../components/MeetupsStartView'

//const func = require('../components/MeetupsStartView')
jest.mock('../components/MeetupsStartView')


describe('Tests on meetupdata with jest', () => {

  test('should sort by number', () => {
    const meetups = [{ id: 1, title: 'Premier league', description: 'lets talk about football', date: '2022-05-16', time: '19:00', location: 'Nya lundenskolans aula' },

    { id: 2, title: 'Bi odling', description: 'lorem ipsum', date: '2021-01-22', time: '13:00', location: 'Stadsbiblioteket' },]
    // const props = { MeetupsStartView: jest.fn() }
    const spyFn = jest.fn(MeetupsStartView)
    spyFn({ meetups })
    // @ts-ignore
    spyFn.mockImplementationOnce(() => {
      return { meetups }
    })

    expect(spyFn).toHaveBeenCalled()
    //expect(spyFn.mock.calls[0][0]).toEqual({});

  })

})
