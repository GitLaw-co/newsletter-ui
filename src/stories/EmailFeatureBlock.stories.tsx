import type { Meta, StoryObj } from '@storybook/react';
import { EmailFeatureBlock } from '../components/EmailFeatureBlock';

const meta: Meta<typeof EmailFeatureBlock> = {
  title: 'Email/EmailFeatureBlock',
  component: EmailFeatureBlock,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['purple', 'light-purple', 'green'],
    },
    text: { control: 'text' },
    textPosition: { control: 'select', options: ['left', 'right'] },
    caption: { control: 'text' },
    height: { control: 'select', options: ['default', 'tall'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[604px] bg-white p-gitlaw-2xl">
      <EmailFeatureBlock {...args} />
    </div>
  ),
  args: {
    variant: 'purple',
    text: 'Never miss a contract renewal again',
    textPosition: 'left',
    caption: 'Automatic renewal reminders keep you ahead of every deadline.',
    height: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-3xl w-[604px] bg-white p-gitlaw-2xl">
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Purple (default)</p>
        <EmailFeatureBlock
          variant="purple"
          text="Never miss a contract renewal again"
          caption="Automatic renewal reminders keep you ahead of every deadline."
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Light purple</p>
        <EmailFeatureBlock
          variant="light-purple"
          text="Send contracts in seconds with eSign"
          caption="Legally binding e-signatures, built right into your workflow."
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Green</p>
        <EmailFeatureBlock
          variant="green"
          text="Collaborate with your whole team"
          textPosition="right"
          caption="Invite teammates, assign roles, and review documents together."
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Tall variant (video block)</p>
        <EmailFeatureBlock
          variant="purple"
          text="Watch the full walkthrough video"
          height="tall"
        />
      </div>
    </div>
  ),
};
