import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { TemplateCard } from '../components/TemplateCard';
import { Divider } from '../components/Divider';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';
import userStoriesTopSrc from '../assets/email/user-stories-top.png';
import userStoriesBottomSrc from '../assets/email/user-stories-bottom.png';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/Recommended Docs',
  component: Wrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'email-green' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

const categories = [
  {
    title: 'Hiring & HR',
    description:
      'Employment contracts, offer letters, onboarding docs. Built to help you hire with clarity and speed.',
    cards: [
      { title: 'Simple Employment Agreement', time: 'Generated in 0.6s' },
      { title: 'Offer Letter Template', time: 'Generated in 1.5s' },
    ],
  },
  {
    title: 'Supplier & Services Agreements',
    description:
      'Set clear terms with vendors and service providers. Avoid disputes and stay in control from day one.',
    cards: [
      { title: 'Vendor Agreement Starter', time: 'Generated in 2.1s' },
      { title: 'Service Terms Sheet', time: 'Generated in 1.2s' },
    ],
  },
  {
    title: 'Freelance & Contractor Agreements',
    description:
      'Fast, fair, and flexible templates for project-based work. Get it in writing \u2013 minus the back and forth.',
    cards: [
      { title: 'Freelance Work Contract', time: 'Generated in 0.4s' },
      { title: 'Independent Contractor Terms', time: 'Generated in 1.3s' },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div className="p-gitlaw-4xl">
      <Wrapper>
        <Header logoSrc={emailLogoSrc} />
        <Hero
          headline="{{first_name}}, your next contract is minutes away"
          highlightText="minutes away"
          body={
            <>
              <span className="block mb-gitlaw-xl">
                You've already created your first contract {'\u2013'} great work. Now
                let's make your next one even easier.
              </span>
              <span className="block">
                We've pulled together popular, ready-to-edit{' '}
                <strong>templates</strong> that help your business move faster.
                Whether you're hiring, protecting IP, or bringing on a new
                supplier, these collections are built to get the legal part done
                faster.
              </span>
            </>
          }
        />
        {categories.map((cat, i) => (
          <React.Fragment key={cat.title}>
            <SectionHeader>{cat.title}</SectionHeader>
            <p className="text-lg leading-[1.4] text-foreground">
              {cat.description}
            </p>
            <div className="flex">
              <TemplateCard
                title={cat.cards[0].title}
                generatedIn={cat.cards[0].time}
                position="left"
              />
              <TemplateCard
                title={cat.cards[1].title}
                generatedIn={cat.cards[1].time}
                position="right"
              />
            </div>
            <Button>Start on GitLaw now</Button>
            {i < categories.length - 1 && (
              <Divider />
            )}
          </React.Fragment>
        ))}
        <Divider />
        <SectionHeader>
          We built GitLaw to make legal work faster
        </SectionHeader>
        <div className="flex flex-col gap-gitlaw-l">
          <p className="text-lg leading-[1.4] text-foreground">
            &ldquo;We spend thousands on routine contracts that should be simple.
            There has to be a better way than paying lawyer rates for standard
            agreements.&rdquo;
          </p>
          <div>
            <p className="text-lg leading-[1.4] text-foreground">
              Professor Sunil Shah
            </p>
            <p className="text-lg font-semibold leading-[1.4] text-foreground">
              Managing Director, Max Bio+
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-[15px] overflow-hidden">
          <img src={userStoriesTopSrc} alt="User stories" className="w-full h-auto" />
          <img src={userStoriesBottomSrc} alt="User stories" className="w-full h-auto" />
        </div>
        <Footer />
      </Wrapper>
    </div>
  ),
};
