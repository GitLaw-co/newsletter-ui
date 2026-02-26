import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { FeatureBlock } from '../components/FeatureBlock';
import { TemplateCard } from '../components/TemplateCard';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';
import avatarUserSrc from '../assets/email/avatar-user.png';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/1st Contract',
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
          headline="{{first_name}}, you did it!"
          highlightText="did it!"
          body="You just created your first contract with GitLaw. Now, wasn't that easy?"
        />
        <SectionHeader>What&apos;s Next?</SectionHeader>
        <FeatureBlock
          variant="light-purple"
          text={'\uD83D\uDCC5 We\u2019ll help you stay ahead of deadlines with renewal reminders'}
        >
          <div className="absolute right-gitlaw-3xl top-1/2 -translate-y-1/2 bg-white p-gitlaw-l w-[180px]">
            <div className="flex items-center gap-gitlaw-s mb-gitlaw-s">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-[8px] text-negative font-bold">G</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground leading-none">GitLaw AI</p>
                <p className="text-[8px] text-subtle">2 minutes ago</p>
              </div>
            </div>
            <p className="text-[10px] leading-[1.4] text-subtle">
              {'\uD83D\uDCC5'} Set the contract to begin on March 12, 2025.
            </p>
          </div>
        </FeatureBlock>
        <p className="text-base leading-[1.4] text-subtle">
          GitLaw will send you smart alerts when your contract is up for renewal.
        </p>
        <FeatureBlock
          variant="green"
          textPosition="right"
          text={'\uD83E\uDD1D Invite your team to collaborate on your legal documents'}
        >
          <div className="absolute left-gitlaw-3xl top-1/2 -translate-y-1/2">
            <div className="bg-white p-gitlaw-l w-[160px]">
              <p className="text-[10px] font-semibold text-foreground mb-gitlaw-m">
                Users with access:
              </p>
              <div className="flex flex-col gap-gitlaw-m">
                <div className="flex items-center gap-gitlaw-m">
                  <img src={avatarUserSrc} alt="" className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-[10px] text-foreground">You</span>
                </div>
                <div className="flex items-center gap-gitlaw-m">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-[7px] text-negative font-bold">CT</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-foreground leading-none">Core Team</p>
                    <p className="text-[8px] text-subtle">5 members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FeatureBlock>
        <p className="text-base leading-[1.4] text-subtle">
          Your team and lawyers can edit legal documents together — all in one
          place.
        </p>
        <SectionHeader>
          Lawyer-vetted templates to help you move faster
        </SectionHeader>
        <div className="flex">
          <TemplateCard
            title="Startup advisor agreement"
            generatedIn="Generated in 0.9s"
            position="left"
          />
          <TemplateCard
            title="Mutual Non-Disclosure Agreement (mNDA)"
            generatedIn="Generated in 1.1s"
            position="right"
          />
        </div>
        <Button>Start on GitLaw now</Button>
        <Footer />
      </Wrapper>
    </div>
  ),
};
