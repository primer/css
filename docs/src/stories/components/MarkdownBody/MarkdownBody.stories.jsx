import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/MarkdownBody',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['MarkdownBodyTemplate'],
  argTypes: {
    variant: {
      options: ['condensed', 'normal', 'spacious'], // iterator
      control: {
        type: 'inline-radio',
        labels: ['condensed', 'normal', 'spacious']
      },
      table: {
        category: 'CSS'
      }
    }
  }
}

const markdownBodySamples = `<h1>Manifold</h1>

<p><a href="https://github.com/elalish/manifold">Manifold</a> is a geometry library dedicated to creating and operating on manifold meshes. A <a href="https://github.com/elalish/manifold/wiki/Manifold-Library#manifoldness">manifold mesh</a> is a mesh that represents a solid object, and so is very important in manufacturing, CAD, structural analysis, etc. Further information can be found on the <a href="https://github.com/elalish/manifold/wiki/Manifold-Library">wiki</a>.</p>

<p>This library is intended to be fast with guaranteed manifold output. As such you need manifold meshes as input, which can be hard to come by since most 3D graphics meshes are not. This library can create simple primitive meshes but also links in Assimp, which will import many kinds of 3D files, but you'll get an error if the imported mesh isn't manifold. Various automated repair tools exist online for fixing non manifold models, usually for 3D printing.</p>

<blockquote>
  <p>The <em><strong>Model layer</strong></em> represents the domain model (such as Account, Product,
  Person, Post, etc.) and encapsulates the business logic specific to
  your application. In Rails, database-backed model classes are derived from
  <code>ActiveRecord::Base</code>. <a href="/rails/rails/blob/main/activerecord/README.rdoc">Active Record</a> allows you to present the data from
  database rows as objects and embellish these data objects with business logic
  methods.
  Although most Rails models are backed by a database, models can also be ordinary
  Ruby classes, or Ruby classes that implement a set of interfaces as provided by
  the <a href="/rails/rails/blob/main/activemodel/README.rdoc">Active Model</a> module.</p>

  <p dir="auto">The <em><strong>View layer</strong></em> is composed of "templates" that are responsible for providing
appropriate representations of your application's resources. Templates can
come in a variety of formats, but most view templates are HTML with embedded
Ruby code (ERB files). Views are typically rendered to generate a controller response
or to generate the body of an email. In Rails, View generation is handled by <a href="/rails/rails/blob/main/actionview/README.rdoc">Action View</a>.</p>

<p dir="auto">The <em><strong>Controller layer</strong></em> is responsible for handling incoming HTTP requests and
providing a suitable response. Usually, this means returning HTML, but Rails controllers
can also generate XML, JSON, PDFs, mobile-specific views, and more. Controllers load and
manipulate models, and render view templates in order to generate the appropriate HTTP response.
In Rails, incoming requests are routed by Action Dispatch to an appropriate controller, and
controller classes are derived from <code>ActionController::Base</code>. Action Dispatch and Action Controller
are bundled together in <a href="/rails/rails/blob/main/actionpack/README.rdoc">Action Pack</a>.</p>
</blockquote>

<div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>&lt;!-- option A --&gt;
&lt;button aria-label="{ usage.screenreaderText }"&gt;{ usage.visibleText }&lt;/button&gt;

&lt;!-- option B --&gt;
&lt;button title="{ usage.screenreaderText }"&gt;&lt;img /&gt;&lt;/button&gt;
</code></pre></div>

<p>Text can be <b>bold</b>, <i>italic</i>, or <s>strikethrough</s>. <a href="https://github.com">Links </a> should be blue with no underlines (unless hovered over).</p>

<h1>Header 1</h1>

<p>Stories are individual <code>.jsx</code> or <code>.mdx</code> files that contain component HTML for prototyping, typically showcasing all possible variations of a component. Stories can be found in the <a href="/primer/css/blob/docs/src/stories/components">stories directory</a> and are organized by component. Storybook will build and deploy a preview on any open Pull Request.</p>

<h1>Using git commit message templates to write better commit messages: a multiline heading</h1>

<h2>Header 2</h2>

<blockquote>This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.</blockquote>

<h3>Header 3</h3>

<pre><code>npm run storybook</code></pre>

<blockquote>
<div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>&lt;!-- option A --&gt;
&lt;button aria-label="{ usage.screenreaderText }"&gt;{ usage.visibleText }&lt;/button&gt;

&lt;!-- option B --&gt;
&lt;button title="{ usage.screenreaderText }"&gt;&lt;img /&gt;&lt;/button&gt;
</code></pre></div>
</blockquote>

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
  <li><input type="checkbox" checked> Create a sample markdown document</li>
  <li><input type="checkbox"> Add task lists to it</li>
  <li><input type="checkbox"> Take a vacation</li>
</ul>

<p>And a "mixed" task list:</p>

<ul>
  <li><input type="checkbox"> Steal underpants</li>
  <li>?</li>
  <li><input type="checkbox"> Profit!</li>
</ul>

And a nested list:

<ul>
  <li>Jackson 5
    <ul>
      <li>Michael</li>
      <li>Tito</li>
      <li>Jackie</li>
      <li>Marlon</li>
      <li>Jermaine</li>
    </ul>
  </li>
  <li>TMNT
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
      <td>It's No Game (No. 1), Up the Hill Backwards, Scary Monsters (And Super Creeps), Ashes to Ashes, Fashion, Teenage Wildlife, Scream Like a Baby, Kingdom Come, Because You're Young, It's No Game (No. 2)</td>
    </tr>
    <tr>
      <td>Prince</td>
      <td>Purple Rain</td>
      <td>1982</td>
      <td>Warner Brothers Records</td>
      <td>Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain</td>
    </tr>
    <tr>
      <td>Beastie Boys</td>
      <td>License to Ill</td>
      <td>1986</td>
      <td>Def Jam</td>
      <td>Rhymin &amp; Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, Fight for Your Right, No Sleep till Brooklyn, Paul Revere, "Hold It Now, Hit It", Brass Monkey, Slow and Low, Time to Get Ill</td>
    </tr>
    <tr>
      <td>Janet Jackson</td>
      <td>Rhythm Nation 1814</td>
      <td>1989</td>
      <td>A&amp;M</td>
      <td>Interlude: Pledge, Rhythm Nation, Interlude: T.V., State of the World, Interlude: Race, The Knowledge, Interlude: Let's Dance, Miss You Much, Interlude: Come Back, Love Will Never Do (Without You), Livin' in a World (They Didn't Make), Alright, Interlude: Hey Baby, Escapade, Interlude: No Acid, Black Cat, Lonely, Come Back to Me, Someday Is Tonight, Interlude: Livin'...In Complete Darkness</td>
    </tr>
  </tbody>
</table>

<hr />

<p>Code snippets like <code>var foo = "bar";</code> can be shown inline.</p>

<p>Also, <code>this should vertically align</code> <s><code>with this</code></s> <s>and this</s>.</p>

<p>Code can also be shown in a block element.</p>

<pre><code>var foo = "bar";</code></pre>

<p>Code can also use syntax highlighting.</p>

<pre><code class="prism-code language-javascript">var foo = "bar";</code></pre>

<pre><code>Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.</code></pre>

<pre><code class="prism-code language-javascript">var foo = "The same thing is true for code with syntax highlighting. A single line of code should horizontally scroll if it is really long.";</code></pre>

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
      <td><code>var foo = "bar";</code></td>
    </tr>
    <tr>
      <td>Ruby</td>
      <td><code>foo = "bar"</code></td>
    </tr>
  </tbody>
</table>

<hr />

<p>The <code>samp</code> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Here an example of an error message: <samp>File not found</samp></p>

<hr />

<p>Small images should be shown at their actual size.</p>

<p><img src="http://placekitten.com/g/300/200/"></p>

<p>Large images should always scale down and fit in the content container.</p>

<p><img src="http://placekitten.com/g/1200/800/"></p>

<p>
  Here's a simple footnote,<sup><a href="#user-content-fn-1-12345" id="user-content-fnref-1-12345" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> and here's a longer one.<sup><a href="#user-content-fn-bignote-12345" id="user-content-fnref-bignote-12345" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup>
</p>

<section data-footnotes="" class="footnotes">
  <h2 id="footnote-label" class="sr-only">Footnotes</h2>
  <ol>
    <li id="user-content-fn-1-12345">
      <p>This is the first footnote. <a href="#user-content-fnref-1-12345" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content"><g-emoji class="g-emoji" alias="leftwards_arrow_with_hook" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/21a9.png">↩</g-emoji></a></p>
    </li>
    <li id="user-content-fn-bignote-12345">
      <p>Here's one with multiple paragraphs and code.</p>
      <p>Indent paragraphs to include them in the footnote.</p>
      <p><code>{ my code }</code></p>
      <p>Add as many paragraphs as you like. <a href="#user-content-fnref-bignote-12345" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content"><g-emoji class="g-emoji" alias="leftwards_arrow_with_hook" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/21a9.png">↩</g-emoji></a></p>
    </li>
  </ol>
</section>

<pre><code>This is the final element on the page and there should be no margin below this.</code></pre>
</div>`;

export const MarkdownBodyTemplate = ({variant}) => (
  <>
    <div className="container-md">
      {/* pending styles: CSV, video upload, checklists, new html tags */}
      <div dangerouslySetInnerHTML={{__html: `<div class="markdown-body markdown-body--${variant}">${markdownBodySamples}</div>`}}></div>
    </div>
  </>
)

export const Playground = MarkdownBodyTemplate.bind({})
Playground.args = {
  variant: 'normal'
}
