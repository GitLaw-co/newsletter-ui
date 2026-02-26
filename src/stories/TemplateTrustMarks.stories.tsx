import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';
import userStoriesTopSrc from '../assets/email/user-stories-top.png';
import userStoriesBottomSrc from '../assets/email/user-stories-bottom.png';
import logoFlexCapitalSrc from '../assets/email/logo-flex-capital.png';
import logoJsvSrc from '../assets/email/logo-jsv.png';
import logoBackedSrc from '../assets/email/logo-backed.png';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/Trust Marks',
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
          headline="Built for Trust. Powered by Speed"
          highlightText="Speed"
          body={
            <>
              <span className="block mb-gitlaw-xl">
                Hey {'{{first_name}}'}, did you know every document you create
                with GitLaw AI is based on high-quality, lawyer-reviewed
                templates?
              </span>
              <span className="block">
                Better still, each time you generate a contract, GitLaw learns
                more about your business and preferences — so your next document
                is even faster, smarter, and more tailored to you. Cool, right?
              </span>
            </>
          }
        />
        <SectionHeader size="md">
          Security As Standard We've built GitLaw security-first so your
          contracts and data stay safe with us.
        </SectionHeader>
        <div className="grid grid-cols-3 gap-gitlaw-2xl">
          <div className="flex flex-col gap-gitlaw-l">
            <span className="text-[32px]">{'\uD83D\uDD11'}</span>
            <p className="text-base leading-[1.4] text-foreground">
              <span className="font-semibold">Role-based access </span>
              control so only the right people see your docs.
            </p>
          </div>
          <div className="flex flex-col gap-gitlaw-l">
            <span className="text-[32px]">{'\uD83D\uDEE1\uFE0F'}</span>
            <p className="text-base leading-[1.4] text-foreground">
              <span className="font-semibold">Bank-grade encryption </span>
              to prevent unauthorized access.
            </p>
          </div>
          <div className="flex flex-col gap-gitlaw-l">
            <span className="text-[32px]">{'\u270D\uFE0F'}</span>
            <p className="text-base leading-[1.4] text-foreground">
              <span className="font-semibold">CCPA & GDPR-aligned practices </span>
              so you have transparency, control.
            </p>
          </div>
        </div>
        <SectionHeader>Trusted by teams like yours</SectionHeader>
        <p className="text-lg leading-[1.4] text-foreground">
          And {'{{job_title_plural}}'} in {'{{Industry}}'} are feeling the
          impact. Here&apos;s how others are using GitLaw to keep business moving.
        </p>
        <div className="flex flex-col rounded-[15px] overflow-hidden">
          <img src={userStoriesTopSrc} alt="User stories" className="w-full h-auto" />
          <img src={userStoriesBottomSrc} alt="User stories" className="w-full h-auto" />
        </div>
        <SectionHeader>Backed by the Best</SectionHeader>
        <p className="text-lg leading-[1.4] text-foreground">
          We're backed by top-tier investors including JSV, Flex Capital, Backed
          VC, and others who believe in building smarter, faster, more accessible
          legal tools.
        </p>
        <div className="flex items-center justify-between">
          <img src={logoFlexCapitalSrc} alt="Flex Capital" className="h-[57px] w-[128px] object-contain" />
          <img src={logoJsvSrc} alt="JSV" className="w-[61px] h-[61px] object-contain" />
          <img src={logoBackedSrc} alt="Backed VC" className="h-[55px] w-[148px] object-contain" />
        </div>
        <SectionHeader>Meet the GitLaw Team</SectionHeader>
        <p className="text-lg leading-[1.4] text-foreground">
          We're a passionate team of legal experts and product builders who
          believe legal should move at the speed of your business. Our founding
          team built Whisk.com (acquired by Samsung), and GitLaw is now trusted
          by growing businesses around the world.
        </p>
        <p className="text-lg leading-[1.4] text-foreground">
          We're just getting started — and we're excited that you're part of it.
          Got feedback? Just hit reply to this email — we'd love to hear it.
        </p>
        <Footer />
      </Wrapper>
    </div>
  ),
};
