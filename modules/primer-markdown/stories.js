import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Markdown', module)
  .add('code', () => (
    <div className="markdown-body">
      <p>
        This is inline <code>code block</code>. This <code>code block has a &lt;br&gt;<br/> in it</code>. <code>When a code block has a long sentence in it, it should wrap the page to a new line</code>. Some people like to see the world burn and put <code>reallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstrings</code> in the code blocks.
      </p>
    </div>
  ))
  .add('pre', () => (
    <div className="markdown-body">
      <pre>
        <code>Really long pre blocks should scroll horizontally when the words are longer than the parent container</code>
      </pre>
    </div>
  ))
