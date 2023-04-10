import React from "react";
import { Meta, StoryObj, storiesOf } from "@storybook/react";
import Input from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "placeholder",
  },
  render: () => <Input />,
};

export const Primary: Story = {
  args: {
    className: "bg-red-500",
    placeholder: "placeholder",
  },
  render: () => <Input />,
};
