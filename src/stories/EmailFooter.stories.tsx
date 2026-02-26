import type { Meta, StoryObj } from '@storybook/react';
import { EmailFooter } from '../components/EmailFooter';

const meta: Meta<typeof EmailFooter> = {
  title: 'Email/EmailFooter',
  component: EmailFooter,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  argTypes: {
    siteUrl: { control: 'text' },
    unsubscribeHref: { control: 'text' },
    address: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[604px] bg-white p-gitlaw-2xl">
      <EmailFooter {...args} />
    </div>
  ),
  args: {
    siteUrl: 'https://git.law',
    unsubscribeHref: '#',
    address: 'GitLaw Inc.\n28 Geary St Suite 650 San Francisco, CA 94108',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-3xl bg-white p-gitlaw-2xl w-[604px]">
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Default footer</p>
        <EmailFooter />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Custom address</p>
        <EmailFooter
          address={'GitLaw Ltd.\n1 London Bridge Street London SE1 9GF UK'}
          siteUrl="https://git.law"
        />
      </div>
    </div>
  ),
};
