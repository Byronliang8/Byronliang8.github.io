import React from "react"
import {graphql, Link} from "gatsby"

const PublicationsPage = ({data}) => {
  return (
    <div pageTitle='Publication'>
      <h1 className="text-3xl font-bold my-4">Publication</h1>
      <p className='mb-2'>This is my publication.</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className='mb-4'>
              {/*<h2 className='text-lg font-semibold'>*/}
                  <h2 className='text-lg font-semibold'>{node.frontmatter.title}</h2>
                  <p>Author: {node.frontmatter.author}, Conference: {node.frontmatter.journal}, Year: {node.frontmatter.year}</p>
              {/*</h2>*/}
              <p className='text-sm mb-1'>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
          </article>
        ))
      }
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(
    sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          year
          title
          author
          journal
        }
        id
        excerpt
      }
    }
  }
`


export default PublicationsPage
