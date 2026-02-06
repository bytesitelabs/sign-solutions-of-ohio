import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies hover styles when hover prop is true', () => {
    const { container } = render(<Card hover>Content</Card>)
    expect(container.firstChild).toHaveClass('hover:shadow-lg')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})

describe('CardTitle Component', () => {
  it('renders as h3 element', () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('displays the title text', () => {
    render(<CardTitle>My Card Title</CardTitle>)
    expect(screen.getByText('My Card Title')).toBeInTheDocument()
  })
})

describe('CardDescription Component', () => {
  it('renders description text', () => {
    render(<CardDescription>This is a description</CardDescription>)
    expect(screen.getByText('This is a description')).toBeInTheDocument()
  })

  it('applies gray text color', () => {
    const { container } = render(<CardDescription>Description</CardDescription>)
    expect(container.firstChild).toHaveClass('text-gray-600')
  })
})
