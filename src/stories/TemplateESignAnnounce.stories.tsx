import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { FeatureBlock } from '../components/FeatureBlock';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';
import esignFeatureSrc from '../assets/email/esign-feature@2x.png';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/eSign Announce',
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
          headline="{{first_name}}, free eSign is here"
          highlightText="free eSign"
          body="No more switching tools to close deals. Add signatures, send for signing and track progress — all in one place."
          ctaLabel="Try eSign now"
        />
        <SectionHeader size="md">
          Send your first contract for signature in under a minute:
        </SectionHeader>
        <FeatureBlock
          variant="light-purple"
          text=""
          height="tall"
        >
          <img
            src={esignFeatureSrc}
            alt="eSign feature — sign contracts directly in GitLaw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </FeatureBlock>
        <p className="text-base leading-[1.4] text-subtle">
          Questions? Reply to this email — real humans are here to help
        </p>
        <Footer />
      </Wrapper>
    </div>
  ),
};
