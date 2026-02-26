import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { FeatureBlock } from '../components/FeatureBlock';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';
import welcomePersonSrc from '../assets/email/welcome-person.png';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/Welcome',
  component: Wrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'email-green' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-gitlaw-4xl">
      <Wrapper>
        <Header logoSrc={emailLogoSrc} />
        <Hero
          headline="{{first_name}}, let's wrap up your first contract"
          highlightText="contract"
          body="You made a great start — you've already begun building your first contract with GitLaw. Let's get it finished so you can get your deal over the line."
          ctaLabel="Start on GitLaw now"
        />
        <SectionHeader>Need a quick refresher?</SectionHeader>
        <SectionHeader size="md">
          We've put together a short walkthrough video to show you exactly how
          GitLaw works:
        </SectionHeader>
        <FeatureBlock
          variant="purple"
          text=""
          height="tall"
        >
          <img
            src={welcomePersonSrc}
            alt="Walkthrough video"
            className="absolute left-[calc(50%-120px)] top-1/2 -translate-x-1/2 -translate-y-[42%] h-[460px] w-auto object-cover"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] w-[90px] h-[90px] rounded-full bg-[#6F5EEC] flex items-center justify-center">
            <div className="w-0 h-0 border-l-[24px] border-l-email-green border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-[6px]" />
          </div>
          <p className="absolute right-gitlaw-4xl top-1/2 -translate-y-1/2 z-10 w-[172px] font-georgia text-2xl leading-[1.2] text-negative not-italic">
            Walkthrough video
          </p>
        </FeatureBlock>
        <p className="text-base leading-[1.4] text-subtle">
          Let us know if you get stuck — real humans are here to help.
        </p>
        <Footer />
      </Wrapper>
    </div>
  ),
};
