import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Layout/Alpha',
  excludeStories: ['ComponentTemplateName'],
  argTypes: {
    container: {
      control: { type: 'select' },
      options: [0, 1, 2, 3],
      mapping: ['', 'container-md', 'container-lg', 'container-xl'],
      control: {
        type: 'select',
        labels: ['Full-width', 'md', 'lg', 'xl']
      },
      description: 'Wrapper around the entire component to define an optional maximum width.',
      table: {
        category: 'CSS'
      }
    },
    hasDivider: {
      control: { type: 'boolean' },
      description: 'true/false toggle to show divider',
      table: {
        category: 'CSS'
      }
    },
    gutter: {
      options: [0, 1, 2, 3], // iterator
      mapping: ['', 'Layout--gutter-none', 'Layout--gutter-condensed', 'Layout--gutter-spacious'],
      control: {
        type: 'select',
        labels: ['default', 'none', 'condensed', 'spacious'] // public labels
      },
      description: 'select menu mapping to strings (example: use for variant class names)',
      table: {
        category: 'CSS'
      }
    },
    sidebarPosition: {
      options: [0, 1],
      mapping: ['Layout--sidebarPosition-start', 'Layout--sidebarPosition-end'],
      control: {
        type: 'select',
        labels: ['start', 'end']
      },
      table: {
        category: 'CSS'
      }
    },
    sidebarWidth: {
      options: [0, 1, 2],
      mapping: ['', 'Layout--sidebar-narrow', 'Layout--sidebar-wide'],
      control: {
        type: 'select',
        labels: ['default', 'narrow', 'wide']
      },
      table: {
        category: 'CSS'
      }
    },
    mainWidth: {
      options: [0, 1, 2, 3],
      mapping: ['', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
        labels: ['Full-width', 'md', 'lg', 'xl']
      },
      table: {
        category: 'CSS'
      }
    },
    flowRowUntil: {
      options: [0, 1, 2],
      mapping: ['', 'Layout--flowRow-until-md', 'Layout--flowRow-until-lg'],
      control: {
        type: 'select',
        labels: ['sm', 'md', 'lg']
      },
      table: {
        category: 'CSS'
      }
    },
    /*
    stringExample: {
      name: 'stringExample',
      type: 'string',
      description: 'text box control',
      table: {
        category: 'Pick one: CSS, HTML, Interactive'
      }
    },
    */
    mainChildren: {
      description: 'creates a slot for main children',
      table: {
        category: 'HTML'
      }
    },
    sidebarChildren: {
      description: 'creates a slot for sidebar children',
      table: {
        category: 'HTML'
      }
    },
  }
}

// build every component case here in the template (private api)
export const ComponentTemplateName = ({
  container,
  hasDivider,
  gutter,
  sidebarPosition,
  sidebarWidth,
  mainWidth,
  flowRowUntil,
  mainChildren,
  sidebarChildren
}) => (
  <div
    // use clsx for multiple classnames
    className={clsx(
      'Layout',
      container && `${container}`,
      gutter && `${gutter}`,
      sidebarPosition && `${sidebarPosition}`,
      sidebarWidth && `${sidebarWidth}`,
      hasDivider && 'Layout--divided',
      flowRowUntil && `${flowRowUntil}`
    )}
    // use undefined for values that shouldn't be set if false
    aria-hidden={hasDivider ? 'true' : undefined}
  >
    {/* use {children} for wrapper component templates */}
    <>
    <div className="Layout-main">
      {mainWidth ? (
        <>
          <div className={'Layout-main-centered-' + mainWidth}>
            <div className={'container-' + mainWidth}>
              {mainChildren}
            </div>
          </div>
        </>
      ) : (
        <>
          {mainChildren}
        </>
      )}
    </div>
    <div className="Layout-divider"></div>
    <div className="Layout-sidebar">{sidebarChildren}</div>
    </>
  </div>
)

const sidebarPlaceholder =
  <>
    <div style={
      {
        width: '100%',
        height: '100%',
        backgroundColor: '#DDF4FF',
        border: '1px solid #80CCFF',
        padding: '16px',
        borderRadius: '6px'
      }
    }>
      sidebar
    </div>
  </>;

const mainPlaceholder =
  <>
    <div style={
      {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFEFF7',
        border: '1px solid #FFADDA',
        padding: '16px',
        borderRadius: '6px'
      }
    }>
      main
    </div>
  </>;

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = ComponentTemplateName.bind({})
Playground.args = {
  container: '',
  sidebarWidth: 0,
  hasDivider: false,
  mainChildren: mainPlaceholder,
  sidebarChildren: sidebarPlaceholder
}

export const NavigationSidebar = ComponentTemplateName.bind({})
NavigationSidebar.args = {
  container: 3,
  sidebarWidth: 0,
  hasDivider: false,
  mainChildren: mainPlaceholder,
  sidebarChildren: sidebarPlaceholder
}

export const MetadataSidebar = ComponentTemplateName.bind({})
MetadataSidebar.args = {
  container: 3,
  sidebarWidth: 0,
  sidebarPosition: 1,
  hasDivider: false,
  mainChildren: mainPlaceholder,
  sidebarChildren: sidebarPlaceholder
}

export const SplitLayout = ComponentTemplateName.bind({});

SplitLayout.parameters = {
  layout: 'fullscreen'
};
SplitLayout.args = {
  container: '',
  sidebarWidth: 0,
  sidebarPosition: 0,
  gutter: 1,
  hasDivider: true,
  mainChildren: mainPlaceholder,
  sidebarChildren: sidebarPlaceholder
}
