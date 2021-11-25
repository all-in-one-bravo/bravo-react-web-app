import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "../components/navigation/NavBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "App/NavigationBar",
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const NavbarDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
