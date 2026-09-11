import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type StoryCardProps = {
  image: string
  title: string
  summary: string
  tag?: string
  to?: string
  children?: ReactNode
}

export default function StoryCard({ image, title, summary, tag, to, children }: StoryCardProps) {
  const content = (
    <>
      <img src={image} alt={title} />
      <div className="story-body">
        {tag ? <p className="story-tag">{tag}</p> : null}
        <h3>{title}</h3>
        <p>{summary}</p>
        {children}
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="story-card link-card">
        {content}
      </Link>
    )
  }

  return <article className="story-card">{content}</article>
}
