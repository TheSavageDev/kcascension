import { render } from '@redwoodjs/testing'

import AboutLayout from './AboutLayout'

describe('AboutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutLayout />)
    }).not.toThrow()
  })
})
