import type { Meta, StoryObj } from '@storybook/react';
import { EmailTemplateCard } from '../components/EmailTemplateCard';

const meta: Meta<typeof EmailTemplateCard> = {
  title: 'Email/EmailTemplateCard',
  component: EmailTemplateCard,
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  argTypes: {
    title: { control: 'text' },
    generatedIn: { control: 'text' },
    position: {
      control: 'select',
      options: ['standalone', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Non-Disclosure Agreement',
    generatedIn: 'Generated in 1.2s',
    position: 'standalone',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-3xl bg-white p-gitlaw-2xl">
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Standalone</p>
        <EmailTemplateCard
          title="Non-Disclosure Agreement"
          generatedIn="Generated in 1.2s"
          position="standalone"
        />
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Paired (side by side)</p>
        <div className="flex">
          <EmailTemplateCard
            title="Employment Contract"
            generatedIn="Generated in 0.9s"
            position="left"
          />
          <EmailTemplateCard
            title="Consulting Agreement"
            generatedIn="Generated in 1.1s"
            position="right"
          />
        </div>
      </div>
      <div>
        <p className="text-sm text-subtle mb-gitlaw-m">Two pairs</p>
        <div className="flex flex-col gap-gitlaw-3xl">
          <div className="flex">
            <EmailTemplateCard
              title="Non-Disclosure Agreement"
              generatedIn="Generated in 1.2s"
              position="left"
            />
            <EmailTemplateCard
              title="Service Agreement"
              generatedIn="Generated in 0.8s"
              position="right"
            />
          </div>
          <div className="flex">
            <EmailTemplateCard
              title="Employment Contract"
              generatedIn="Generated in 0.9s"
              position="left"
            />
            <EmailTemplateCard
              title="Consulting Agreement"
              generatedIn="Generated in 1.1s"
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
