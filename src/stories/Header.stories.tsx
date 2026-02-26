import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import emailLogoSrc from '../assets/email/email-logo.svg';

const meta: Meta<typeof Header> = {
  title: 'Email/Components/Header',
  component: Header,
  parameters: { layout: 'centered' },
  argTypes: {
    logoSrc: { control: 'text', description: 'URL to logo image' },
    logoAlt: { control: 'text', description: 'Alt text for logo' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: emailLogoSrc,
    logoAlt: 'GitLaw',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-2xl p-gitlaw-2xl bg-white">
      <div className="flex flex-col gap-gitlaw-m">
        <p className="text-sm text-subtle">With logo image</p>
        <Header logoSrc={emailLogoSrc} />
      </div>
      <div className="flex flex-col gap-gitlaw-m">
        <p className="text-sm text-subtle">Text wordmark (fallback)</p>
        <Header />
      </div>
    </div>
  ),
};
