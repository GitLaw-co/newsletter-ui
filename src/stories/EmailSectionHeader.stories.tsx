import type { Meta, StoryObj } from '@storybook/react';
import { EmailSectionHeader } from '../components/EmailSectionHeader';

const meta: Meta<typeof EmailSectionHeader> = {
  title: 'Email/EmailSectionHeader',
  component: EmailSectionHeader,
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
        <EmailSectionHeader size="lg">What&apos;s Next?</EmailSectionHeader>
        <EmailSectionHeader size="lg">Trusted by teams like yours</EmailSectionHeader>
        <EmailSectionHeader size="lg">Backed by the Best</EmailSectionHeader>
      </div>
      <div className="flex flex-col gap-gitlaw-m">
        <p className="text-sm text-subtle">Medium (20px)</p>
        <EmailSectionHeader size="md">Security As Standard</EmailSectionHeader>
        <EmailSectionHeader size="md">Lawyer-vetted templates</EmailSectionHeader>
      </div>
    </div>
  ),
};
