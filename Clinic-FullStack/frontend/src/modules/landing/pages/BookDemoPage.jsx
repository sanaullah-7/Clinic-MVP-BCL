import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Play,
} from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FormField } from '@/components';
import { APP_NAME, ROUTES } from '@/constants/routes';
import { cn } from '@/lib/cn';

const EVENT_TYPE_UUID = 'GEDIJR2D6GA77BDE';
const EVENT_TYPE_NAME = `${APP_NAME} Demo`;
const ASSIGNED_TO = 'Tendo Team';
const SLOT_DURATION_MINUTES = 30;

const TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '21:00',
];

const EXPECTATIONS = [
  'A brief conversation to discuss your business goals and workflows',
  `A live demonstration of ${APP_NAME}, tailored to the way you work`,
  'Solutions that will save time, increase patient retention, and help you measure clinic performance',
  'Answers to your specific questions so you have all the information you need',
];

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Phone number is required'),
  clinicName: z.string().optional(),
  notes: z.string().optional(),
});

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function formatMonthYear(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatSelectedDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function formatTimeLabel(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function buildLocalIso(date, hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const local = new Date(date);
  local.setHours(h, m, 0, 0);
  const offsetMin = -local.getTimezoneOffset();
  const sign = offsetMin >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMin);
  const oh = String(Math.floor(abs / 60)).padStart(2, '0');
  const om = String(abs % 60).padStart(2, '0');
  const y = local.getFullYear();
  const mo = String(local.getMonth() + 1).padStart(2, '0');
  const d = String(local.getDate()).padStart(2, '0');
  const hh = String(local.getHours()).padStart(2, '0');
  const mm = String(local.getMinutes()).padStart(2, '0');
  return `${y}-${mo}-${d}T${hh}:${mm}:00${sign}${oh}:${om}`;
}

function addMinutesIso(iso, minutes) {
  const date = new Date(iso);
  date.setMinutes(date.getMinutes() + minutes);
  const offsetMin = -date.getTimezoneOffset();
  const sign = offsetMin >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMin);
  const oh = String(Math.floor(abs / 60)).padStart(2, '0');
  const om = String(abs % 60).padStart(2, '0');
  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  return `${y}-${mo}-${d}T${hh}:${mm}:00${sign}${oh}:${om}`;
}

function getTimezoneLabel() {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZoneName: 'long',
      hour: 'numeric',
      minute: '2-digit',
    }).formatToParts(new Date());
    const zone = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'Local Time';
    const time = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
    return `${zone} (${time})`;
  } catch {
    return 'Local Time';
  }
}

function uuid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `invitee-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function CalendarDayButton({ day, selectedDate, today, onSelect }) {
  if (!day) {
    return <div className="aspect-square" />;
  }

  const available = day.available;
  const selected = selectedDate && sameDay(day.date, selectedDate);
  const isToday = sameDay(day.date, today);

  return (
    <button
      type="button"
      disabled={!available}
      onClick={() => onSelect(day.date)}
      className={cn(
        'relative flex aspect-square items-center justify-center rounded-full text-sm font-medium transition-colors',
        available && !selected && 'bg-[#d8f3f3] text-[#1a1a1a] hover:bg-[#bfeaea]',
        selected && 'bg-[#1a8f8f] text-white',
        !available && 'cursor-default text-[#c5c5c5]',
      )}
      aria-label={day.date.toDateString()}
      aria-pressed={selected}
    >
      {day.date.getDate()}
      {isToday && !selected && (
        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#9aa0a6]" />
      )}
    </button>
  );
}

function DemoCalendar({ month, selectedDate, onMonthChange, onSelectDate }) {
  const today = useMemo(() => startOfDay(new Date()), []);

  const days = useMemo(() => {
    const year = month.getFullYear();
    const m = month.getMonth();
    const first = new Date(year, m, 1);
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    // Monday-first index
    const startOffset = (first.getDay() + 6) % 7;
    const cells = Array.from({ length: startOffset }, () => null);

    for (let d = 1; d <= daysInMonth; d += 1) {
      const date = new Date(year, m, d);
      const available = !isWeekend(date) && startOfDay(date) > today;
      cells.push({ date, available });
    }

    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [month, today]);

  const canGoPrev =
    month.getFullYear() > today.getFullYear() ||
    (month.getFullYear() === today.getFullYear() && month.getMonth() > today.getMonth());

  return (
    <div>
      <div className="mb-4 flex items-center justify-between px-1">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => onMonthChange(-1)}
          className="rounded-full p-1.5 text-[#2aa8a8] transition-colors hover:bg-[#eefafa] disabled:opacity-30"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-base font-semibold text-[#1a1a1a]">{formatMonthYear(month)}</h3>
        <button
          type="button"
          onClick={() => onMonthChange(1)}
          className="rounded-full p-1.5 text-[#2aa8a8] transition-colors hover:bg-[#eefafa]"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#888888]">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <CalendarDayButton
            key={day ? day.date.toISOString() : `empty-${i}`}
            day={day}
            selectedDate={selectedDate}
            today={today}
            onSelect={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
}

function BookingWidget({
  step,
  month,
  selectedDate,
  selectedTime,
  timezoneLabel,
  onMonthChange,
  onSelectDate,
  onSelectTime,
  onBackToCalendar,
  onBackToTimes,
  form,
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-[3px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(145deg, #5ecfcf 0%, #2b6f9e 55%, #1e3a5f 100%)',
        }}
        aria-hidden
      />
      <div className="relative max-h-[560px] overflow-y-auto rounded-[13px] bg-white p-5 sm:p-6">
        {step === 'calendar' && (
          <>
            <DemoCalendar
              month={month}
              selectedDate={selectedDate}
              onMonthChange={onMonthChange}
              onSelectDate={onSelectDate}
            />
            <div className="mt-5 flex items-center gap-2 border-t border-[#f0f0f0] pt-4 text-sm text-[#444444]">
              <Globe className="h-4 w-4 shrink-0 text-[#666666]" />
              <span className="truncate">{timezoneLabel}</span>
            </div>
            <div className="mt-4 text-center">
              <button type="button" className="text-sm text-[#2aa8a8] hover:underline">
                Cookie settings
              </button>
            </div>
          </>
        )}

        {step === 'times' && selectedDate && (
          <>
            <button
              type="button"
              onClick={onBackToCalendar}
              className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-[#2aa8a8] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <h3 className="mb-1 text-lg font-semibold text-[#1a1a1a]">Select a time</h3>
            <p className="mb-4 text-sm text-[#666666]">{formatSelectedDate(selectedDate)}</p>
            <div className="mb-3 flex items-center gap-2 text-sm text-[#444444]">
              <Clock className="h-4 w-4" />
              {SLOT_DURATION_MINUTES} min
            </div>
            <div className="grid max-h-[320px] grid-cols-2 gap-2 overflow-y-auto pr-1">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSelectTime(slot)}
                  className={cn(
                    'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                    selectedTime === slot
                      ? 'border-[#1a8f8f] bg-[#1a8f8f] text-white'
                      : 'border-[#cfe9e9] text-[#1a8f8f] hover:border-[#1a8f8f] hover:bg-[#f3fbfb]',
                  )}
                >
                  {formatTimeLabel(slot)}
                </button>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-[#f0f0f0] pt-4 text-sm text-[#444444]">
              <Globe className="h-4 w-4 shrink-0 text-[#666666]" />
              <span className="truncate">{timezoneLabel}</span>
            </div>
          </>
        )}

        {step === 'form' && selectedDate && selectedTime && (
          <>
            <button
              type="button"
              onClick={onBackToTimes}
              className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-[#2aa8a8] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <h3 className="mb-1 text-lg font-semibold text-[#1a1a1a]">Enter your details</h3>
            <p className="mb-1 text-sm text-[#666666]">{formatSelectedDate(selectedDate)}</p>
            <p className="mb-5 text-sm font-medium text-[#1a8f8f]">
              {formatTimeLabel(selectedTime)} · {SLOT_DURATION_MINUTES} min
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <FormField
                  label="First name"
                  placeholder="SanaUllah"
                  error={errors.firstName?.message}
                  {...register('firstName')}
                />
                <FormField
                  label="Last name"
                  placeholder="Yousafzai"
                  error={errors.lastName?.message}
                  {...register('lastName')}
                />
              </div>
              <FormField
                label="Email"
                type="email"
                placeholder="you@clinic.com"
                error={errors.email?.message}
                {...register('email')}
              />
              <FormField
                label="Phone"
                type="tel"
                placeholder="+92 344 4455588"
                error={errors.phone?.message}
                {...register('phone')}
              />
              <FormField
                label="Clinic / organization"
                placeholder="Optional"
                error={errors.clinicName?.message}
                {...register('clinicName')}
              />
              <FormField
                label="Anything we should know?"
                placeholder="Optional"
                error={errors.notes?.message}
                {...register('notes')}
              />
              <Button
                type="submit"
                variant="primary"
                fullWidth
                pill
                loading={isSubmitting}
                className="mt-2"
              >
                Book Demo
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function BookDemoPage() {
  const navigate = useNavigate();
  const today = startOfDay(new Date());
  const [month, setMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState('calendar');
  const timezoneLabel = useMemo(() => getTimezoneLabel(), []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      clinicName: '',
      notes: '',
    },
  });

  function handleMonthChange(delta) {
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  }

  function handleSelectDate(date) {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep('times');
  }

  function handleSelectTime(slot) {
    setSelectedTime(slot);
    setStep('form');
  }

  function onSubmit(values) {
    const start = buildLocalIso(selectedDate, selectedTime);
    const end = addMinutesIso(start, SLOT_DURATION_MINUTES);
    const params = new URLSearchParams({
      assigned_to: ASSIGNED_TO,
      event_type_uuid: EVENT_TYPE_UUID,
      event_type_name: EVENT_TYPE_NAME,
      event_start_time: start,
      event_end_time: end,
      invitee_uuid: uuid(),
      invitee_first_name: values.firstName,
      invitee_last_name: values.lastName,
      invitee_full_name: `${values.firstName} ${values.lastName}`.trim(),
      invitee_email: values.email,
      text_reminder_number: values.phone,
      answer_1: values.clinicName || '',
      answer_2: values.phone,
      answer_3: values.notes || '',
      answer_4: '',
    });

    navigate(`${ROUTES.demo.confirmation}?${params.toString()}`);
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        <section className="bg-white py-10 md:py-14 lg:py-16">
          <div className="mx-auto grid max-w-content items-start gap-10 px-4 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
            <div className="max-w-xl">
              <h1 className="mb-4 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem]">
                Book a free demo
              </h1>
              <p className="mb-8 text-body leading-relaxed text-[#555555] md:text-body-lg">
                Schedule time with a product expert and let us show you why {APP_NAME}&apos;s
                scalability, flexibility, and integrations set us apart from other clinic management
                software solutions.
              </p>

              <h2 className="mb-4 text-lg font-bold text-[#1a1a1a]">What can I expect?</h2>
              <ul className="mb-8 space-y-4">
                {EXPECTATIONS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7ecfcf]">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-body leading-relaxed text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body text-[#444444]">
                Questions? Call us at{' '}
                <a href="tel:+18666433041" className="font-semibold text-[#f08c60] hover:underline">
                  +1-866-643-3041 ext. 1
                </a>{' '}
                or email{' '}
                <a
                  href="mailto:hello@tendo.com"
                  className="font-semibold text-[#f08c60] hover:underline"
                >
                  hello@tendo.com
                </a>
              </p>
            </div>

            <BookingWidget
              step={step}
              month={month}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timezoneLabel={timezoneLabel}
              onMonthChange={handleMonthChange}
              onSelectDate={handleSelectDate}
              onSelectTime={handleSelectTime}
              onBackToCalendar={() => {
                setStep('calendar');
                setSelectedTime(null);
              }}
              onBackToTimes={() => setStep('times')}
              form={form}
              onSubmit={onSubmit}
            />
          </div>
        </section>

        <div className="border-y border-[#cfe9e9] bg-[#e8f7f7]">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-3 px-4 py-4 md:px-8">
            <span className="text-body text-[#1a1a1a]">Can&apos;t wait?</span>
            <a
              href={ROUTES.demo.highlightVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#1a1a1a] underline decoration-[#1a1a1a] underline-offset-4 hover:text-[#1a8f8f]"
            >
              Watch a 4-minute highlight reel
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
            </a>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
