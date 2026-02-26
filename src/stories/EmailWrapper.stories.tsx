import type { Meta, StoryObj } from '@storybook/react';
import { EmailWrapper } from '../components/EmailWrapper';
import { EmailHeader } from '../components/EmailHeader';
import { EmailHero } from '../components/EmailHero';
import { EmailDivider } from '../components/EmailDivider';
import { EmailSectionHeader } from '../components/EmailSectionHeader';
import { EmailFooter } from '../components/EmailFooter';
import emailLogoSrc from '../assets/email/email-logo.svg';

const meta: Meta<typeof EmailWrapper> = {
  title: 'Email/EmailWrapper',
  component: EmailWrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
        headline="Welcome to GitLaw"
        highlightText="GitLaw"
        body="Contracts at the speed of AI. Get started today and experience the future of legal documentation."
        ctaLabel="Start on GitLaw now"
        ctaHref="#"
      />
      <EmailDivider />
      <EmailSectionHeader>What&apos;s Next?</EmailSectionHeader>
      <p className="text-lg leading-[1.4] text-foreground">
        Here is a brief overview of everything you can do with your new account.
      </p>
      <EmailFooter />
    </EmailWrapper>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="bg-page-background p-gitlaw-4xl rounded-[24px]">
      <EmailWrapper>
        <EmailHeader logoSrc={emailLogoSrc} />
        <EmailHero
          headline="eSign is here"
          highlightText="eSign"
          body="Send, sign, and manage legally binding documents — all inside GitLaw."
          ctaLabel="Try eSign now"
          ctaHref="#"
        />
        <EmailDivider />
        <EmailFooter />
      </EmailWrapper>
    </div>
  ),
};
