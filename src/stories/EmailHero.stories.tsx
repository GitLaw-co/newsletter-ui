import type { Meta, StoryObj } from '@storybook/react';
import { EmailHero } from '../components/EmailHero';

const meta: Meta<typeof EmailHero> = {
  title: 'Email/EmailHero',
  component: EmailHero,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  argTypes: {
    headline: { control: 'text' },
    highlightText: { control: 'text' },
    body: { control: 'text' },
    ctaLabel: { control: 'text' },
    ctaHref: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[604px] bg-white p-gitlaw-2xl">
      <EmailHero {...args} />
    </div>
  ),
  args: {
    headline: 'Welcome to GitLaw',
    highlightText: 'GitLaw',
    body: 'Contracts at the speed of AI. Get started today and experience the future of legal documentation.',
    ctaLabel: 'Start on GitLaw now',
    ctaHref: '#',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-4xl w-[604px] bg-white p-gitlaw-2xl">
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Welcome email</p>
        <EmailHero
          headline="Welcome to GitLaw"
          highlightText="GitLaw"
          body="Contracts at the speed of AI. Get started today and experience the future of legal documentation."
          ctaLabel="Start on GitLaw now"
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">eSign release</p>
        <EmailHero
          headline="eSign is here — send and sign contracts"
          highlightText="eSign is here"
          body="GitLaw now supports legally binding electronic signatures. Send documents for signature directly from your dashboard."
          ctaLabel="Try eSign now"
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">No highlight, no CTA</p>
        <EmailHero
          headline="We'd love your feedback"
          body="You've been using GitLaw for a while now. We'd love to hear what you think so we can keep improving."
        />
      </div>
    </div>
  ),
};
