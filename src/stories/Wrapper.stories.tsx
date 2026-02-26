import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Divider } from '../components/Divider';
import { SectionHeader } from '../components/SectionHeader';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Components/Wrapper',
  component: Wrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Wrapper>
      <Header logoSrc={emailLogoSrc} />
      <Hero
        headline="Welcome to GitLaw"
        highlightText="GitLaw"
        body="Contracts at the speed of AI. Get started today and experience the future of legal documentation."
        ctaLabel="Start on GitLaw now"
        ctaHref="#"
      />
      <Divider />
      <SectionHeader>What&apos;s Next?</SectionHeader>
      <p className="text-lg leading-[1.4] text-foreground">
        Here is a brief overview of everything you can do with your new account.
      </p>
      <Footer />
    </Wrapper>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="bg-page-background p-gitlaw-4xl rounded-[24px]">
      <Wrapper>
        <Header logoSrc={emailLogoSrc} />
        <Hero
          headline="eSign is here"
          highlightText="eSign"
          body="Send, sign, and manage legally binding documents — all inside GitLaw."
          ctaLabel="Try eSign now"
          ctaHref="#"
        />
        <Divider />
        <Footer />
      </Wrapper>
    </div>
  ),
};
