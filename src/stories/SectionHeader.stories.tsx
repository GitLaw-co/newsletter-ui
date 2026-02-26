import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '../components/SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'Email/Components/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md'],
      description: 'lg=30px (default), md=20px',
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg',
    children: "What's Next?",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-2xl p-gitlaw-2xl bg-white w-[604px]">
      <div className="flex flex-col gap-gitlaw-m">
        <p className="text-sm text-subtle">Large (30px)</p>
        <SectionHeader size="lg">What&apos;s Next?</SectionHeader>
        <SectionHeader size="lg">Trusted by teams like yours</SectionHeader>
        <SectionHeader size="lg">Backed by the Best</SectionHeader>
      </div>
      <div className="flex flex-col gap-gitlaw-m">
        <p className="text-sm text-subtle">Medium (20px)</p>
        <SectionHeader size="md">Security As Standard</SectionHeader>
        <SectionHeader size="md">Lawyer-vetted templates</SectionHeader>
      </div>
    </div>
  ),
};
