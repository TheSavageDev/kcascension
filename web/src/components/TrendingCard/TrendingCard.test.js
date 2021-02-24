import { render } from '@redwoodjs/testing'

import TrendingCard from './TrendingCard'

describe('TrendingCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrendingCard />)
    }).not.toThrow()
  })
})
