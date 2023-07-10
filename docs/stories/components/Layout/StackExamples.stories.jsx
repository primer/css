import React from 'react'
import {
  StackTemplate
} from './Stack.stories'

export default {
  title: 'Components/Layout/Stack/Examples'
}

export const ButtonInlineStack = StackTemplate.bind({})
ButtonInlineStack.args = {
  direction: "inline",
  gap: "condensed",
  children: (
    <>
      <button class="btn">Button</button>
      <button class="btn">Button</button>
      <button class="btn">Button</button>
    </>
  )
};

export const PageSections = StackTemplate.bind({})
PageSections.args = {
  direction: "block",
  gap: "normal",
  children: (
    <>
      <div className="Box p-2" style={{minHeight: '20ch'}}>Section 1</div>
      <div className="Box p-2" style={{minHeight: '12ch'}}>Section 2</div>
      <div className="Box p-2" style={{minHeight: '16ch'}}>Section 3</div>
    </>
  )
};

export const Composition = StackTemplate.bind({})
Composition.args = {
  direction: "block",
  gap: "normal",
  children: (
    <>
      <StackTemplate divider={true} children={(
        <>
          <StackTemplate gap="condensed" children={(
            <>
              <h4>Heading</h4>
              <div>Lorem ipsum dolor sit amet avec consequer domulus sit lorem ipsum dolor sit amet.</div>
              <StackTemplate direction="inline" wrap="wrap" gap="condensed" children={(
                <>
                  <span class="Label">Inline labels set to wrap</span>
                  <span class="Label">Label 2</span>
                  <span class="Label">Label 3</span>
                  <span class="Label">Label 4</span>
                  <span class="Label">Label 5</span>
                </>
              )} />
            </>
          )} />
          <hr className="Stack-divider" />
          <StackTemplate gap="condensed" children={(
            <>
              <h4>Heading</h4>
              <div>Lorem ipsum dolor sit amet avec consequer domulus sit lorem ipsum dolor sit amet.</div>
              <StackTemplate direction="inline" wrap="wrap" gap="condensed" children={(
                <>
                  <span class="Label">Inline labels set to wrap</span>
                  <span class="Label">Label 2</span>
                  <span class="Label">Label 3</span>
                  <span class="Label">Label 4</span>
                  <span class="Label">Label 5</span>
                </>
              )} />
            </>
          )} />
        </>
      )} />
    </>
  )
};