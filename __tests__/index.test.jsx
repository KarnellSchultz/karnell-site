/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('pages load with content', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /karnell schultz/i,
    })

    expect(heading).toBeInTheDocument
  })
})
