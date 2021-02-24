import { render } from '@redwoodjs/testing'

import Trending from './Trending'

describe('Trending', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Trending />)
    }).not.toThrow()
  })
})
