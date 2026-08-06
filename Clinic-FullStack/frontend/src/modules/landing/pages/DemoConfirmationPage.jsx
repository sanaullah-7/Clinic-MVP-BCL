import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, CheckCircle2, Clock, Mail, Phone, Play, User } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button } from '@/components';
import { APP_NAME, ROUTES } from '@/constants/routes';

const YOUTUBE_WATCH_URL = ROUTES.demo.highlightVideo;
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/ysz5S6PUM-U?rel=0';

function formatEventRange(startIso, endIso) {
  if (!startIso) return 'Time to be confirmed';
  try {
    const start = new Date(startIso);
    const end = endIso ? new Date(endIso) : null;
    const datePart = start.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const startTime = start.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
    const endTime = end
      ? end.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      : null;
    return endTime ? `${datePart} · ${startTime} – ${endTime}` : `${datePart} · ${startTime}`;
  } catch {
    return startIso;
  }
}

function DetailRow({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f7f7] text-[#1a8f8f]">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-caption font-medium uppercase tracking-wide text-[#888888]">{label}</p>
        <p className="text-body text-[#1a1a1a]">{value}</p>
      </div>
    </div>
  );
}

export function DemoConfirmationPage() {
  const [params] = useSearchParams();

  const firstName = params.get('invitee_first_name') || '';
  const lastName = params.get('invitee_last_name') || '';
  const fullName =
    params.get('invitee_full_name') ||
    [firstName, lastName].filter(Boolean).join(' ') ||
    'there';
  const email = params.get('invitee_email') || '';
  const eventName = params.get('event_type_name') || `${APP_NAME} Demo`;
  const assignedTo = params.get('assigned_to') || 'Tendo Team';
  const start = params.get('event_start_time');
  const end = params.get('event_end_time');
  const phone = params.get('text_reminder_number') || params.get('answer_2') || '';

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <section className="bg-gradient-to-b from-[#eefafa] to-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#d8f3f3]">
                <CheckCircle2 className="h-8 w-8 text-[#1a8f8f]" />
              </div>
              <h1 className="mb-2 font-heading text-[1.75rem] font-bold tracking-[-0.02em] text-[#1a1a1a] md:text-[2.25rem]">
                You are scheduled, {firstName || fullName}!
              </h1>
              <p className="text-body text-[#555555] md:text-body-lg">
                A calendar invitation for your {eventName} has been sent to{' '}
                {email ? <span className="font-medium text-[#1a1a1a]">{email}</span> : 'your inbox'}.
              </p>
            </div>

            <div className="mb-8 rounded-2xl border border-[#d7ecec] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-8">
              <h2 className="mb-5 text-lg font-semibold text-[#1a1a1a]">Demo details</h2>
              <div className="space-y-5">
                <DetailRow icon={Calendar} label="Event" value={eventName} />
                <DetailRow icon={User} label="Host" value={assignedTo} />
                <DetailRow icon={Clock} label="When" value={formatEventRange(start, end)} />
                <DetailRow icon={Mail} label="Invitee" value={fullName} />
                {phone ? <DetailRow icon={Phone} label="Phone" value={phone} /> : null}
              </div>
            </div>

            <div className="mb-8 overflow-hidden rounded-2xl border border-[#d7ecec] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="border-b border-[#e8f7f7] px-6 py-4 md:px-8">
                <h2 className="text-lg font-semibold text-[#1a1a1a]">
                  Watch a 4-minute highlight reel
                </h2>
                <p className="mt-1 text-sm text-[#666666]">
                  Get a quick look at {APP_NAME} while you wait for your demo.
                </p>
              </div>

              <div className="relative aspect-video w-full bg-[#111111]">
                <iframe
                  title={`${APP_NAME} highlight reel`}
                  src={YOUTUBE_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-8">
                <a
                  href={YOUTUBE_WATCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#1a8f8f] underline underline-offset-4 hover:text-[#147575]"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Open on YouTube
                </a>
                <Link to={ROUTES.landing.home}>
                  <Button variant="outline" pill>
                    Back to home
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-[#e8f7f7] px-5 py-4 text-center text-sm text-[#333333]">
              Can&apos;t wait?{' '}
              <a
                href={YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1a1a1a] underline underline-offset-4"
              >
                Watch the highlight reel on YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
