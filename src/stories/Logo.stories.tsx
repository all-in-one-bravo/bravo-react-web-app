import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "../components/content/Logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "App/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo />;

export const LogoDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
