import type { Meta, StoryObj } from '@storybook/react';
import { EmailButton } from '../components/EmailButton';

const meta: Meta<typeof EmailButton> = {
  title: 'Email/EmailButton',
  component: EmailButton,
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
      <EmailButton href="#">Start on GitLaw now</EmailButton>
      <EmailButton href="#">Try eSign now</EmailButton>
      <EmailButton href="#">Provide feedback</EmailButton>
      <EmailButton href="#">View recommended documents</EmailButton>
    </div>
  ),
};
