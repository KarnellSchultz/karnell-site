/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Blog from '../app/blog/page'

describe('Home', () => {
  it('renders a blog page heading', () => {
    render(<Blog />)

    const heading = screen.getByRole('heading', { name: /blog/i })

    expect(heading).toBeInTheDocument
  })
})
