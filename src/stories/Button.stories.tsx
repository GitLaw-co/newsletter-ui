import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Email/Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: 'text', description: 'Button label' },
    href: { control: 'text', description: 'Destination URL' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Start on GitLaw now',
    href: '#',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-m p-gitlaw-2xl bg-white">
      <Button href="#">Start on GitLaw now</Button>
      <Button href="#">Try eSign now</Button>
      <Button href="#">Provide feedback</Button>
      <Button href="#">View recommended documents</Button>
    </div>
  ),
};
