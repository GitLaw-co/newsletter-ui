import type { Meta, StoryObj } from '@storybook/react';
import { EmailDivider } from '../components/EmailDivider';

const meta: Meta<typeof EmailDivider> = {
  title: 'Email/EmailDivider',
  component: EmailDivider,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[604px] bg-white p-gitlaw-2xl flex flex-col gap-gitlaw-2xl">
      <p className="text-base text-foreground">Section above</p>
      <EmailDivider />
      <p className="text-base text-foreground">Section below</p>
    </div>
  ),
};
