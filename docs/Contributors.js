import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Link, Text, Avatar, Flex} from '@primer/components'

function generateContributors(authors) {
  const logins = []
  const uniqueAuthors = authors.filter(author => {
    if (logins.includes(author.login)) {
      return false
    } else {
      logins.push(author.login)
      return true
    }
  })
  return uniqueAuthors.map((author, i) => (
    <>
      <Link href={`https://github.com/${author.login}`}>{author.login}</Link>
      {authors.length > 1 && authors.length - 1 !== i && ', '}
    </>
  ))
}

function generateLastEdited(lastAuthor) {
  if (lastAuthor) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const day = lastAuthor.time.getDate()
    const month = months[lastAuthor.time.getMonth()]
    const year = lastAuthor.time.getFullYear()
    return (
      <Flex alignItems="center">
        <Text fontWeight="bold" lineHeight={2} mr={1}>
          Last edited by:{' '}
        </Text>
        <Avatar src={lastAuthor.avatar} mr={1} />
        <Text>
          <Link href={`https://github.com/${lastAuthor.login}`}> {lastAuthor.login}</Link> on{' '}
          <Link color="gray.5" href={lastAuthor.commitUrl}>{`${month} ${day}, ${year}`}</Link>
        </Text>
      </Flex>
    )
  }
}

const Contributors = ({filePath, repoPath, contributors}) => {
  const [authors, setAuthors] = useState([])
  useEffect(() => {
    const url = `https://api.github.com/repos/${repoPath}/commits?path=${filePath}`
    fetch(url)
      .then(response => response.json())
      .then(commits => {
        const commitData = []
        const ids = []
        for (let i = 0; i < commits.length; i++) {
          if (!ids.includes(commits[i].author.id)) {
            commitData.push({
              login: commits[i].author.login,
              avatar: commits[i].author.avatar_url,
              time: new Date(commits[i].commit.author.date),
              commitUrl: commits[i].html_url
            })
            ids.push(commits[i].author.id)
          }
        }
        setAuthors(commitData)
      })
  }, [filePath])

  return (
    <Text fontSize={1}>
      <Text fontWeight="bold" lineHeight={2}>
        Contributors:{' '}
      </Text>
      {generateContributors([...contributors, ...authors])}
      {generateLastEdited(authors[0])}
    </Text>
  )
}

Contributors.defaultProps = {
  contributors: []
}

Contributors.propTypes = {
  contributors: PropTypes.object.isRequired,
  filePath: PropTypes.string.isRequired,
  repoPath: PropTypes.string.isRequired
}
export default Contributors
