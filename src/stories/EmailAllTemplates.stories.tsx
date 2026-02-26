import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmailWrapper } from '../components/EmailWrapper';
import { EmailHeader } from '../components/EmailHeader';
import { EmailHero } from '../components/EmailHero';
import { EmailButton } from '../components/EmailButton';
import { EmailSectionHeader } from '../components/EmailSectionHeader';
import { EmailFeatureBlock } from '../components/EmailFeatureBlock';
import { EmailTemplateCard } from '../components/EmailTemplateCard';
import { EmailFooter } from '../components/EmailFooter';
import { EmailDivider } from '../components/EmailDivider';
import emailLogoSrc from '../assets/email/email-logo.svg';
import welcomePersonSrc from '../assets/email/welcome-person.png';
import avatarUserSrc from '../assets/email/avatar-user.png';
import userStoriesTopSrc from '../assets/email/user-stories-top.png';
import userStoriesBottomSrc from '../assets/email/user-stories-bottom.png';
import logoFlexCapitalSrc from '../assets/email/logo-flex-capital.png';
import logoJsvSrc from '../assets/email/logo-jsv.png';
import logoBackedSrc from '../assets/email/logo-backed.png';
import esignFeatureSrc from '../assets/email/esign-feature@2x.png';

const meta: Meta<typeof EmailWrapper> = {
  title: 'Email/AllTemplates',
  component: EmailWrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Template definitions                                               */
/* ------------------------------------------------------------------ */

const templates = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'esign', label: 'eSign Announce' },
  { id: 'first-contract', label: '1st Contract' },
  { id: 'trust-marks', label: 'Trust Marks' },
  { id: 'recommended-docs', label: 'Recommended Docs' },
  { id: 'feedback', label: 'Feedback' },
] as const;

type TemplateId = (typeof templates)[number]['id'];

/* ------------------------------------------------------------------ */
/*  Template 1: Welcome                                                */
/* ------------------------------------------------------------------ */

function TemplateWelcome() {
  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
        headline="{{first_name}}, let's wrap up your first contract"
        highlightText="contract"
        body="You made a great start — you've already begun building your first contract with GitLaw. Let's get it finished so you can get your deal over the line."
        ctaLabel="Start on GitLaw now"
      />
      <EmailSectionHeader>Need a quick refresher?</EmailSectionHeader>
      <EmailSectionHeader size="md">
        We've put together a short walkthrough video to show you exactly how
        GitLaw works:
      </EmailSectionHeader>
      <EmailFeatureBlock
        variant="purple"
        text=""
        height="tall"
      >
        {/* Person photo — centered, covering left-center portion */}
        <img
          src={welcomePersonSrc}
          alt="Walkthrough video"
          className="absolute left-[calc(50%-120px)] top-1/2 -translate-x-1/2 -translate-y-[42%] h-[460px] w-auto object-cover"
        />
        {/* Play button — CSS component: purple circle with green triangle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] w-[90px] h-[90px] rounded-full bg-[#6F5EEC] flex items-center justify-center">
          <div className="w-0 h-0 border-l-[24px] border-l-email-green border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-[6px]" />
        </div>
        {/* "Walkthrough video" text — Georgia serif, right side */}
        <p className="absolute right-gitlaw-4xl top-1/2 -translate-y-1/2 z-10 w-[172px] font-georgia text-2xl leading-[1.2] text-negative not-italic">
          Walkthrough video
        </p>
      </EmailFeatureBlock>
      <p className="text-base leading-[1.4] text-subtle">
        Let us know if you get stuck — real humans are here to help.
      </p>
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template 2: eSign Announce                                         */
/* ------------------------------------------------------------------ */

function TemplateEsign() {
  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
        headline="{{first_name}}, free eSign is here"
        highlightText="free eSign"
        body="No more switching tools to close deals. Add signatures, send for signing and track progress — all in one place."
        ctaLabel="Try eSign now"
      />
      <EmailSectionHeader size="md">
        Send your first contract for signature in under a minute:
      </EmailSectionHeader>
      <EmailFeatureBlock
        variant="light-purple"
        text=""
        height="tall"
      >
        <img
          src={esignFeatureSrc}
          alt="eSign feature — sign contracts directly in GitLaw"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </EmailFeatureBlock>
      <p className="text-base leading-[1.4] text-subtle">
        Questions? Reply to this email — real humans are here to help
      </p>
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template 3: 1st Contract Completed                                 */
/* ------------------------------------------------------------------ */

function TemplateFirstContract() {
  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
        headline="{{first_name}}, you did it!"
        highlightText="did it!"
        body="You just created your first contract with GitLaw. Now, wasn't that easy?"
      />
      <EmailSectionHeader>What&apos;s Next?</EmailSectionHeader>
      <EmailFeatureBlock
        variant="light-purple"
        text={'\uD83D\uDCC5 We\u2019ll help you stay ahead of deadlines with renewal reminders'}
      >
        {/* Notification card */}
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
      </EmailFeatureBlock>
      <p className="text-base leading-[1.4] text-subtle">
        GitLaw will send you smart alerts when your contract is up for renewal.
      </p>
      <EmailFeatureBlock
        variant="green"
        textPosition="right"
        text={'\uD83E\uDD1D Invite your team to collaborate on your legal documents'}
      >
        {/* Access card */}
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
      </EmailFeatureBlock>
      <p className="text-base leading-[1.4] text-subtle">
        Your team and lawyers can edit legal documents together — all in one
        place.
      </p>
      <EmailSectionHeader>
        Lawyer-vetted templates to help you move faster
      </EmailSectionHeader>
      <div className="flex">
        <EmailTemplateCard
          title="Startup advisor agreement"
          generatedIn="Generated in 0.9s"
          position="left"
        />
        <EmailTemplateCard
          title="Mutual Non-Disclosure Agreement (mNDA)"
          generatedIn="Generated in 1.1s"
          position="right"
        />
      </div>
      <EmailButton>Start on GitLaw now</EmailButton>
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template 4: Trust Marks                                            */
/* ------------------------------------------------------------------ */

function TemplateTrustMarks() {
  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
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
      <EmailSectionHeader size="md">
        Security As Standard We've built GitLaw security-first so your
        contracts and data stay safe with us.
      </EmailSectionHeader>
      {/* Security features grid — emojis match Figma */}
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
      <EmailSectionHeader>Trusted by teams like yours</EmailSectionHeader>
      <p className="text-lg leading-[1.4] text-foreground">
        And {'{{job_title_plural}}'} in {'{{Industry}}'} are feeling the
        impact. Here&apos;s how others are using GitLaw to keep business moving.
      </p>
      {/* Photo grid — actual images from Figma */}
      <div className="flex flex-col rounded-[15px] overflow-hidden">
        <img src={userStoriesTopSrc} alt="User stories" className="w-full h-auto" />
        <img src={userStoriesBottomSrc} alt="User stories" className="w-full h-auto" />
      </div>
      <EmailSectionHeader>Backed by the Best</EmailSectionHeader>
      <p className="text-lg leading-[1.4] text-foreground">
        We're backed by top-tier investors including JSV, Flex Capital, Backed
        VC, and others who believe in building smarter, faster, more accessible
        legal tools.
      </p>
      {/* Investor logos — actual images from Figma, sizes match design */}
      <div className="flex items-center justify-between">
        <img src={logoFlexCapitalSrc} alt="Flex Capital" className="h-[57px] w-[128px] object-contain" />
        <img src={logoJsvSrc} alt="JSV" className="w-[61px] h-[61px] object-contain" />
        <img src={logoBackedSrc} alt="Backed VC" className="h-[55px] w-[148px] object-contain" />
      </div>
      <EmailSectionHeader>Meet the GitLaw Team</EmailSectionHeader>
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
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template 5: Recommended Documents                                  */
/* ------------------------------------------------------------------ */

function TemplateRecommendedDocs() {
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

  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
      <EmailHero
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
          <EmailSectionHeader>{cat.title}</EmailSectionHeader>
          <p className="text-lg leading-[1.4] text-foreground">
            {cat.description}
          </p>
          <div className="flex">
            <EmailTemplateCard
              title={cat.cards[0].title}
              generatedIn={cat.cards[0].time}
              position="left"
            />
            <EmailTemplateCard
              title={cat.cards[1].title}
              generatedIn={cat.cards[1].time}
              position="right"
            />
          </div>
          <EmailButton>Start on GitLaw now</EmailButton>
          {i < categories.length - 1 && (
            <EmailDivider />
          )}
        </React.Fragment>
      ))}
      <EmailDivider />
      <EmailSectionHeader>
        We built GitLaw to make legal work faster
      </EmailSectionHeader>
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
      {/* Photo grid — actual images from Figma */}
      <div className="flex flex-col rounded-[15px] overflow-hidden">
        <img src={userStoriesTopSrc} alt="User stories" className="w-full h-auto" />
        <img src={userStoriesBottomSrc} alt="User stories" className="w-full h-auto" />
      </div>
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template 6: Feedback                                               */
/* ------------------------------------------------------------------ */

function TemplateFeedback() {
  return (
    <EmailWrapper>
      <EmailHeader logoSrc={emailLogoSrc} />
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
      <EmailButton>Provide feedback</EmailButton>
      <div className="text-lg leading-[1.4] text-foreground">
        <p className="mb-gitlaw-l">Thanks again for joining GitLaw.</p>
        <p>Nick & the GitLaw Team</p>
      </div>
      <EmailFooter />
    </EmailWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Template registry                                                  */
/* ------------------------------------------------------------------ */

const templateComponents: Record<TemplateId, React.FC> = {
  welcome: TemplateWelcome,
  esign: TemplateEsign,
  'first-contract': TemplateFirstContract,
  'trust-marks': TemplateTrustMarks,
  'recommended-docs': TemplateRecommendedDocs,
  feedback: TemplateFeedback,
};

/* ------------------------------------------------------------------ */
/*  Switcher UI                                                        */
/* ------------------------------------------------------------------ */

function AllTemplatesDemo() {
  const [activeId, setActiveId] = useState<TemplateId>('welcome');
  const ActiveTemplate = templateComponents[activeId];

  return (
    <div className="flex flex-col items-center gap-gitlaw-2xl py-gitlaw-3xl">
      {/* Tab switcher */}
      <div className="flex gap-gitlaw-s flex-wrap justify-center">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            className={`px-gitlaw-xl py-gitlaw-m text-sm rounded-gitlaw-full border transition-interactive ${
              activeId === t.id
                ? 'bg-primary text-negative border-primary'
                : 'bg-white text-foreground border-border hover:border-primary'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Email preview with green background matching Figma */}
      <div className="bg-[#EBFAEE] rounded-[20px] p-gitlaw-4xl">
        <ActiveTemplate />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Story                                                              */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  render: () => <AllTemplatesDemo />,
};
