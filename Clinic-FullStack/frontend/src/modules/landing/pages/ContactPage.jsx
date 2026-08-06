import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn, Input } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { ContactHeroVisual } from '../components/ContactMockups';
import { cn } from '@/lib/cn';

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-body-sm font-semibold text-[#1a1a1a]">
      {children}
    </label>
  );
}

function ContactField({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 rounded-lg border-[#e0e0e0] bg-[#f7f7f7] placeholder:italic placeholder:text-[#aaaaaa] focus-visible:ring-primary/40"
      />
    </div>
  );
}

function InfoBlock({ title, children, action }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center gap-2">
        <h3 className="font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">{title}</h3>
        {action}
      </div>
      <div className="text-body leading-relaxed text-[#666666] md:text-body-lg">{children}</div>
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
            <FadeIn className="order-2 lg:order-1">
              <ContactHeroVisual />

              <div className="mt-8 lg:mt-10">
                <h1 className="mb-2 font-heading text-[2rem] font-bold text-[#1a1a1a] md:text-[2.25rem]">
                  Contact Us
                </h1>
                <p className="mb-8 text-body-lg text-[#666666]">Have a question? Let us know.</p>

                <InfoBlock title="Send us a message">
                  <p>
                    Fill out the form and we&apos;ll connect you with the right person on our team.
                  </p>
                </InfoBlock>

                <InfoBlock title="Call us">
                  <p className="mb-1">Support hours: 8am – 10pm EST</p>
                  <a
                    href="tel:+18666433041"
                    className="font-semibold text-primary hover:underline"
                  >
                    +1-866-643-3041 ext. 2
                  </a>
                </InfoBlock>

                <InfoBlock
                  title="Book a demo"
                  action={
                    <Link to={ROUTES.demo.book} aria-label="Book a demo">
                      <ArrowRight className="h-4 w-4 text-[#1a1a1a]" />
                    </Link>
                  }
                >
                  <p>
                    See Tendo in action with a personalized walkthrough from one of our product experts.
                  </p>
                </InfoBlock>

                <InfoBlock title="Submit a support ticket">
                  <p>
                    Already a customer? You can also{' '}
                    <Link to={ROUTES.landing.support} className="font-semibold text-primary hover:underline">
                      submit a support ticket
                    </Link>
                    .
                  </p>
                </InfoBlock>

                <div className="mt-8 flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-nav text-white transition-opacity hover:opacity-85"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-[#e8ecea] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <h2 className="mb-3 font-heading text-[1.35rem] font-bold text-[#1a1a1a]">
                      Thank you for reaching out!
                    </h2>
                    <p className="text-body text-[#666666]">
                      We&apos;ve received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <ContactField
                        id="name"
                        label="Name"
                        placeholder="e.g. John Smith"
                        value={form.name}
                        onChange={handleChange('name')}
                      />
                      <ContactField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="e.g. john@clinic.com"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                      <ContactField
                        id="phone"
                        label="Phone"
                        type="tel"
                        placeholder="e.g. (555) 123-4567"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                      <ContactField
                        id="clinicName"
                        label="Clinic Name"
                        placeholder="e.g. Harmony Wellness"
                        value={form.clinicName}
                        onChange={handleChange('clinicName')}
                      />
                    </div>

                    <div>
                      <FieldLabel htmlFor="message">How can we help?</FieldLabel>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us a little about your clinic and what you're looking for..."
                        value={form.message}
                        onChange={handleChange('message')}
                        className={cn(
                          'w-full resize-y rounded-lg border border-[#e0e0e0] bg-[#f7f7f7] px-3 py-2.5 text-body text-[#1a1a1a]',
                          'placeholder:italic placeholder:text-[#aaaaaa]',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
                        )}
                      />
                    </div>

                    <div className="rounded-lg border border-[#e0e0e0] bg-[#fafafa] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded border border-[#ccc] bg-white" aria-hidden />
                        <span className="text-body-sm text-[#666666]">I&apos;m not a robot</span>
                      </div>
                      <p className="mt-2 text-[10px] text-[#999999]">reCAPTCHA placeholder</p>
                    </div>

                    <div className="pt-2 text-center">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        pill
                        className="min-w-[160px] shadow-orange"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </SectionShell>
      </main>

      <MarketingFooter />
    </div>
  );
}
