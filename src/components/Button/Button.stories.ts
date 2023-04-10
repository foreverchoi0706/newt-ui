import type { Meta, StoryObj } from '@storybook/react';

import Component from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: 'ui/Button',
    component: Component,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
    args: {
        children: "테스트"
    },
};

export const Primary: Story = {
    args: {
        children: "테스트",
        className: "bg-red-500"
    },
};
