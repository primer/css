import React from 'react'

export default {
  title: 'Deprecated/Markdown',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
  },
}

export const Default = () => {
  return (
    <>
      <div class="markdown-body">
        <p>
          Text can be <b>bold</b>, <i>italic</i>, or <s>strikethrough</s>. <a href="https://github.com">Links </a>{' '}
          should be blue with no underlines (unless hovered over).
        </p>
        <p>
          There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be
          whitespace between paragraphs. There should be whitespace between paragraphs.
        </p>
        <p>
          There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be
          whitespace between paragraphs. There should be whitespace between paragraphs.
        </p>
        <blockquote>
          <p>There should be no margin above this first sentence.</p>
          <p>Blockquotes should be a lighter gray with a gray border along the left side.</p>
          <p>There should be no margin below this final sentence.</p>
        </blockquote>
        <h1>Header 1</h1>
        <p>
          This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork
          belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet
          mignon cow shoulder short ribs biltong.
        </p>
        <h2>Header 2</h2>
        <blockquote>
          This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly
          porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet
          mignon cow shoulder short ribs biltong.
        </blockquote>
        <h3>Header 3</h3>
        <pre>
          <code>This is a code block following a header.</code>
        </pre>
        <h4>Header 4</h4>
        <ul>
          <li>This is an unordered list following a header.</li>
          <li>This is an unordered list following a header.</li>
          <li>This is an unordered list following a header.</li>
        </ul>
        <h5>Header 5</h5>
        <ol>
          <li>This is an ordered list following a header.</li>
          <li>This is an ordered list following a header.</li>
          <li>This is an ordered list following a header.</li>
        </ol>
        <h6>Header 6</h6>
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Follows</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A table</td>
              <td>A header</td>
            </tr>
            <tr>
              <td>A table</td>
              <td>A header</td>
            </tr>
            <tr>
              <td>A table</td>
              <td>A header</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>There's a horizontal rule above and below this.</p>
        <hr />
        <p>Here is an unordered list:</p>
        <ul>
          <li>Salt-n-Pepa</li>
          <li>Bel Biv DeVoe</li>
          <li>Kid 'N Play</li>
        </ul>
        <p>And an ordered list:</p>
        <ol>
          <li>Michael Jackson</li>
          <li>Michael Bolton</li>
          <li>Michael Bublé</li>
        </ol>
        <p>And an unordered task list:</p>
        <ul>
          <li>
            <input type="checkbox" checked /> Create a sample markdown document
          </li>
          <li>
            <input type="checkbox" /> Add task lists to it
          </li>
          <li>
            <input type="checkbox" /> Take a vacation
          </li>
        </ul>
        <p>And a "mixed" task list:</p>
        <ul>
          <li>
            <input type="checkbox" /> Steal underpants
          </li>
          <li>?</li>
          <li>
            <input type="checkbox" /> Profit!
          </li>
        </ul>
        And a nested list:
        <ul>
          <li>
            Jackson 5
            <ul>
              <li>Michael</li>
              <li>Tito</li>
              <li>Jackie</li>
              <li>Marlon</li>
              <li>Jermaine</li>
            </ul>
          </li>
          <li>
            TMNT
            <ul>
              <li>Leonardo</li>
              <li>Michelangelo</li>
              <li>Donatello</li>
              <li>Raphael</li>
            </ul>
          </li>
        </ul>
        <p>Definition lists can be used with HTML syntax. Definition terms are bold and italic.</p>
        <dl>
          <dt>Name</dt>
          <dd>Godzilla</dd>
          <dt>Born</dt>
          <dd>1952</dd>
          <dt>Birthplace</dt>
          <dd>Japan</dd>
          <dt>Color</dt>
          <dd>Green</dd>
        </dl>
        <hr />
        <p>Tables should have bold headings and alternating shaded rows.</p>
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Album</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>David Bowie</td>
              <td>Scary Monsters</td>
              <td>1980</td>
            </tr>
            <tr>
              <td>Prince</td>
              <td>Purple Rain</td>
              <td>1982</td>
            </tr>
            <tr>
              <td>Beastie Boys</td>
              <td>License to Ill</td>
              <td>1986</td>
            </tr>
            <tr>
              <td>Janet Jackson</td>
              <td>Rhythm Nation 1814</td>
              <td>1989</td>
            </tr>
          </tbody>
        </table>
        <p>If a table is too wide, it should condense down and/or scroll horizontally.</p>
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Album</th>
              <th>Year</th>
              <th>Label</th>
              <th>Songs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>David Bowie</td>
              <td>Scary Monsters</td>
              <td>1980</td>
              <td>RCA Records</td>
              <td>
                It's No Game (No. 1), Up the Hill Backwards, Scary Monsters (And Super Creeps), Ashes to Ashes, Fashion,
                Teenage Wildlife, Scream Like a Baby, Kingdom Come, Because You're Young, It's No Game (No. 2)
              </td>
            </tr>
            <tr>
              <td>Prince</td>
              <td>Purple Rain</td>
              <td>1982</td>
              <td>Warner Brothers Records</td>
              <td>
                Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I
                Would Die 4 U, Baby I'm a Star, Purple Rain
              </td>
            </tr>
            <tr>
              <td>Beastie Boys</td>
              <td>License to Ill</td>
              <td>1986</td>
              <td>Def Jam</td>
              <td>
                Rhymin &amp; Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, Fight for Your
                Right, No Sleep till Brooklyn, Paul Revere, "Hold It Now, Hit It", Brass Monkey, Slow and Low, Time to
                Get Ill
              </td>
            </tr>
            <tr>
              <td>Janet Jackson</td>
              <td>Rhythm Nation 1814</td>
              <td>1989</td>
              <td>A&amp;M</td>
              <td>
                Interlude: Pledge, Rhythm Nation, Interlude: T.V., State of the World, Interlude: Race, The Knowledge,
                Interlude: Let's Dance, Miss You Much, Interlude: Come Back, Love Will Never Do (Without You), Livin' in
                a World (They Didn't Make), Alright, Interlude: Hey Baby, Escapade, Interlude: No Acid, Black Cat,
                Lonely, Come Back to Me, Someday Is Tonight, Interlude: Livin'...In Complete Darkness
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          Code snippets like <code>var foo = "bar";</code> can be shown inline.
        </p>
        <p>
          Also, <code>this should vertically align</code>{' '}
          <s>
            <code>with this</code>
          </s>{' '}
          <s>and this</s>.
        </p>
        <p>Code can also be shown in a block element.</p>
        <pre>
          <code>var foo = "bar";</code>
        </pre>
        <p>Code can also use syntax highlighting.</p>
        <pre>
          <code class="prism-code language-javascript">var foo = "bar";</code>
        </pre>
        <pre>
          <code>
            Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This
            line should be long enough to demonstrate this.
          </code>
        </pre>
        <pre>
          <code class="prism-code language-javascript">
            var foo = "The same thing is true for code with syntax highlighting. A single line of code should
            horizontally scroll if it is really long.";
          </code>
        </pre>
        <p>Inline code inside table cells should still be distinguishable.</p>
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JavasScript</td>
              <td>
                <code>var foo = "bar";</code>
              </td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td>
                <code>foo = "bar"</code>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          The <code>samp</code> HTML element is used to enclose inline text which represents sample (or quoted) output
          from a computer program. Here an example of an error message: <samp>File not found</samp>
        </p>
        <hr />
        <p>Small images should be shown at their actual size.</p>
        <p>
          <img src="http://placekitten.com/g/300/200/" />
        </p>
        <p>Large images should always scale down and fit in the content container.</p>
        <p>
          <img src="http://placekitten.com/g/1200/800/" />
        </p>
        <p>
          Here's a simple footnote,
          <sup>
            <a
              href="#user-content-fn-1-12345"
              id="user-content-fnref-1-12345"
              data-footnote-ref=""
              aria-describedby="footnote-label"
            >
              1
            </a>
          </sup>{' '}
          and here's a longer one.
          <sup>
            <a
              href="#user-content-fn-bignote-12345"
              id="user-content-fnref-bignote-12345"
              data-footnote-ref=""
              aria-describedby="footnote-label"
            >
              2
            </a>
          </sup>
        </p>
        <section data-footnotes="" class="footnotes">
          <h2 id="footnote-label" class="sr-only">
            Footnotes
          </h2>
          <ol>
            <li id="user-content-fn-1-12345">
              <p>
                This is the first footnote.{' '}
                <a
                  href="#user-content-fnref-1-12345"
                  data-footnote-backref=""
                  class="data-footnote-backref"
                  aria-label="Back to content"
                >
                  <g-emoji
                    class="g-emoji"
                    alias="leftwards_arrow_with_hook"
                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/21a9.png"
                  >
                    ↩
                  </g-emoji>
                </a>
              </p>
            </li>
            <li id="user-content-fn-bignote-12345">
              <p>Here's one with multiple paragraphs and code.</p>
              <p>Indent paragraphs to include them in the footnote.</p>
              <p>
                <code>my code</code>
              </p>
              <p>
                Add as many paragraphs as you like.{' '}
                <a
                  href="#user-content-fnref-bignote-12345"
                  data-footnote-backref=""
                  class="data-footnote-backref"
                  aria-label="Back to content"
                >
                  <g-emoji
                    class="g-emoji"
                    alias="leftwards_arrow_with_hook"
                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/21a9.png"
                  >
                    ↩
                  </g-emoji>
                </a>
              </p>
            </li>
          </ol>
        </section>
        <pre>
          <code>This is the final element on the page and there should be no margin below this.</code>
        </pre>
      </div>
    </>
  )
}
