/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Blogs from '../app/blog/page'

describe('Home', () => {
  it('renders a blog page heading', () => {
    render(<Blogs />)

    const heading = screen.getByRole('heading', { name: /blogs/i })

    expect(heading).toBeInTheDocument
  })
})
