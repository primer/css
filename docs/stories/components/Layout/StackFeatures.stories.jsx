import React from 'react'
import {
  StackTemplate
} from './Stack.stories'

export default {
  title: 'Components/Layout/Stack/Features'
}

export const DirectChildren = StackTemplate.bind({})
DirectChildren.args = {
  direction: "block",
  gap: "normal",
  narrow_gap: "condensed",
  children: (
    <>
      <div style={{backgroundColor: 'lightpink', padding: '16px'}}>Item 1</div>
      <div style={{backgroundColor: 'orange', padding: '16px'}}>Item 2</div>
      <div style={{backgroundColor: 'lightblue', padding: '16px'}}>Item 3</div>
      <div style={{backgroundColor: 'darkseagreen', padding: '16px'}}>Item 4</div>
      <div style={{backgroundColor: 'khaki', padding: '16px'}}>Item 5</div>
    </>
  )
};

export const StackItems = StackTemplate.bind({})
StackItems.args = {
  direction: "inline",
  gap: "normal",
  wrap: "wrap",
  narrow_gap: "condensed",
  children: (
    <>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightpink', padding: '16px'}}>Item 1</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'orange', padding: '16px'}}>Item 2</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightblue', padding: '16px'}}>Item 3</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'darkseagreen', padding: '16px'}}>Item 4</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'khaki', padding: '16px'}}>Item 5</div>
      </div>
    </>
  )
};

export const ExpandStackItem = StackTemplate.bind({})
ExpandStackItem.args = {
  direction: "inline",
  wrap: "wrap",
  gap: "normal",
  narrow_gap: "condensed",
  children: (
    <>
      <div className="Stack-item Stack-item--expand-whenRegular Stack-item--expand-whenNarrow">
        <div style={{backgroundColor: 'lightpink', padding: '16px'}}>Item 1 (expand)</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'orange', padding: '16px'}}>Item 2</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightblue', padding: '16px'}}>Item 3</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'darkseagreen', padding: '16px'}}>Item 4</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'khaki', padding: '16px'}}>Item 5</div>
      </div>
    </>
  )
};

export const ExpandStackItems = StackTemplate.bind({})
ExpandStackItems.args = {
  direction: "inline",
  wrap: "wrap",
  gap: "normal",
  narrow_gap: "condensed",
  children: (
    <>
      <div className="Stack-item Stack-item--expand-whenRegular Stack-item--expand-whenNarrow">
        <div style={{backgroundColor: 'lightpink', padding: '16px'}}>Item 1 (expand)</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'orange', padding: '16px'}}>Item 2</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightblue', padding: '16px'}}>Item 3</div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'darkseagreen', padding: '16px'}}>Item 4</div>
      </div>
      <div className="Stack-item Stack-item--expand-whenRegular Stack-item--expand-whenNarrow">
        <div style={{backgroundColor: 'khaki', padding: '16px'}}>Item 5 (expand)</div>
      </div>
    </>
  )
};

export const ContentOverflow = StackTemplate.bind({})
ContentOverflow.args = {
  direction: "block",
  gap: "normal",
  narrow_gap: "condensed",
  children: (
    <>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightpink', padding: '16px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus sapien. Nullam gravida tortor eget lacinia volutpat. Vestibulum efficitur lorem non ex ultricies accumsan. Vestibulum porttitor nunc non tellus auctor rutrum. Morbi nec augue turpis. Vestibulum pulvinar semper risus id fermentum. Nulla egestas metus id nulla ullamcorper ullamcorper nec in urna. Duis tincidunt finibus quam, quis pretium odio pulvinar nec. Nullam malesuada sodales ligula. Nunc varius arcu et tellus condimentum interdum.
        </div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'orange', padding: '16px'}}>
          Ut eu ligula tellus. Integer efficitur sit amet lorem nec hendrerit. In hac habitasse platea dictumst. Donec aliquam posuere leo iaculis efficitur. Curabitur malesuada placerat est, sit amet fermentum quam dignissim congue. Etiam interdum, leo sit amet molestie ornare, nisi ipsum cursus odio, a auctor turpis dolor in justo. Nulla molestie dolor sit amet lectus faucibus gravida. Maecenas ac ornare magna, in ultricies lectus. Nam venenatis porta pellentesque. Nullam odio nisl, accumsan id rutrum in, ultricies ac purus. Donec nec blandit risus.
        </div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'lightblue', padding: '16px'}}>
          Ut cursus elit leo. Curabitur in lorem eget sem ullamcorper tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis vulputate turpis, fringilla congue felis laoreet tempus. Fusce tincidunt sodales lacus eu volutpat. Duis a semper neque. Aenean fermentum bibendum lectus, et aliquam ligula elementum vitae. Cras tempor lacus ipsum, vel sagittis sem laoreet et. Nulla vel tortor metus. Nullam euismod, dui non vulputate pulvinar, nisl sem malesuada dolor, vel malesuada nibh dui nec arcu. Nunc accumsan justo purus, non sodales massa blandit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vel mollis orci, at consequat ante. Curabitur pharetra euismod condimentum. Pellentesque mauris lacus, ultricies sit amet lacus a, congue scelerisque dui.
        </div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'darkseagreen', padding: '16px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
          Vestibulum faucibus luctus bibendum. Nunc sodales interdum dapibus. Nulla aliquet nibh ac est pellentesque eleifend. Praesent ultricies eu nunc vel dignissim. Cras tempus porttitor arcu porttitor condimentum. Nulla imperdiet turpis nec tincidunt luctus. Curabitur in congue urna. Nulla vehicula nunc hendrerit, tristique est porta, tristique erat. Duis vel neque sed eros eleifend feugiat non eget metus. Curabitur elit nunc, condimentum et mollis vitae, vestibulum et lorem. Duis luctus tortor eu vulputate volutpat. Fusce egestas volutpat ante et lobortis. Integer scelerisque neque vitae lorem pellentesque elementum. Sed fringilla lacus at hendrerit tincidunt. Vestibulum pretium, odio nec commodo imperdiet, nibh eros viverra mauris, eget pellentesque est nulla sit amet nunc. Cras mi metus, tristique et tincidunt at, tristique sed dolor.
        </div>
      </div>
      <div className="Stack-item Stack-item--expand-whenRegular Stack-item--expand-whenNarrow">
        <div style={{backgroundColor: 'khaki', padding: '16px'}}>
          In tempus, urna eu egestas convallis, nunc nisi faucibus lectus, et tempor felis nisi nec nunc. Morbi porttitor libero ac ipsum efficitur ullamcorper. Praesent eget velit volutpat, gravida odio vel, aliquet lectus. Sed a lorem imperdiet, tempor ligula eget, rutrum lorem. Nulla magna purus, iaculis sit amet volutpat et, varius sed orci. Curabitur eu purus quis mi dictum faucibus sit amet in lectus. Nam egestas quis felis sit amet finibus. In congue elementum lorem, id molestie neque commodo nec. Maecenas vitae accumsan orci. Aenean imperdiet et tellus et tincidunt. Donec non porta justo, sit amet laoreet risus. Mauris in bibendum tellus, at lobortis tortor.
        </div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'coral', padding: '16px'}}>
          Item 6
        </div>
      </div>
      <div className="Stack-item">
        <div style={{backgroundColor: 'pink', padding: '16px'}}>
          Item 7
        </div>
      </div>
    </>
  )
};
