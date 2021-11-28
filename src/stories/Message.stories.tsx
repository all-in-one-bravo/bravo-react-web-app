import { ComponentStory, ComponentMeta } from '@storybook/react'

import Message from '../components/content/Message'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Message>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = () => <Message />

export const LogoDefault = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
