import { render } from '@redwoodjs/testing'

import Schedule from './Schedule'

describe('Schedule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Schedule />)
    }).not.toThrow()
  })
})
