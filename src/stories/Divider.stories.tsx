import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Email/Components/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[604px] bg-white p-gitlaw-2xl flex flex-col gap-gitlaw-2xl">
      <p className="text-base text-foreground">Section above</p>
      <Divider />
      <p className="text-base text-foreground">Section below</p>
    </div>
  ),
};
