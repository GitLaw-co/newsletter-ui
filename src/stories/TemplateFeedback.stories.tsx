import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import emailLogoSrc from '../assets/email/email-logo.svg';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/Feedback',
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
        <div className="flex flex-col gap-[40px]">
          <p className="text-2xl font-bold leading-[1.4] text-foreground">
            We'd love your feedback
          </p>
          <p className="text-lg leading-[1.4] text-foreground">
            Hey — I hope you've found what you were looking for on GitLaw.
          </p>
          <p className="text-lg leading-[1.4] text-foreground">
            It's been a week since you joined GitLaw and we'd love to get your
            feedback. It would only take 30 seconds!
          </p>
        </div>
        <Button>Provide feedback</Button>
        <div className="text-lg leading-[1.4] text-foreground">
          <p className="mb-gitlaw-l">Thanks again for joining GitLaw.</p>
          <p>Nick & the GitLaw Team</p>
        </div>
        <Footer />
      </Wrapper>
    </div>
  ),
};
