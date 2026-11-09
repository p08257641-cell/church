export interface WeeklyService {
  id: string;
  title: string;
  subtitle: string;
  dayOfWeek: number; // 0 = Sunday, 2 = Tuesday, 3 = Wednesday
  daysOfWeek?: number[];
  scheduleType?: 'weekly' | 'monthly-first-tue-wed';
  scheduleLabel?: string;
  hourGMT: number;
  minuteGMT: number;
  durationMinutes: number;
  category: string;
  description: string;
  location?: string;
}

export const WEEKLY_SERVICES: WeeklyService[] = [
  {
    id: 'sunday-main',
    title: 'Sunday Service & Worldwide Broadcast',
    subtitle: 'The Son Place, Labone & Global Online Stream',
    dayOfWeek: 0,
    daysOfWeek: [0],
    scheduleType: 'weekly',
    scheduleLabel: 'Every Sunday',
    hourGMT: 15,
    minuteGMT: 0,
    durationMinutes: 150,
    category: 'Weekly Service',
    description: 'Gather in-person at The Son Place (Mikaddo Plaza, Labone, Accra) or stream live globally for Spirit-filled worship, apostolic exposition, and divine transformation.',
    location: 'The Son Place, Mikaddo Plaza, Labone Junction, Accra, Ghana'
  },
  {
    id: 'top-mission-service',
    title: 'Top Mission Service',
    subtitle: 'First Week of Every Month · Tue & Wed with Prophet Edem Julius-Cudjoe',
    dayOfWeek: 2,
    daysOfWeek: [2, 3],
    scheduleType: 'monthly-first-tue-wed',
    scheduleLabel: '1st Week Monthly · Tue & Wed',
    hourGMT: 18,
    minuteGMT: 30,
    durationMinutes: 150,
    category: 'Monthly Service',
    description: 'Held every first week of every month (Tuesdays & Wednesdays at 6:30 PM Prompt) with Prophet Edem Julius-Cudjoe at Grace Grounds (The Son Place), Mikaddo Conference Centre, Labone Junction & Online.',
    location: 'Grace Grounds (The Son Place), Mikaddo Conference Centre, Labone Junction, Accra & Online'
  }
];

export function getFirstTuesdayOfMonth(year: number, monthIndex: number): number {
  const firstDow = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay();
  return 1 + ((2 - firstDow + 7) % 7);
}

// Explicit month overrides where Top Mission shifts from the regular first week (0-indexed month)
const TOP_MISSION_MONTH_OVERRIDES: Record<string, [number, number]> = {
  '2026-10': [10, 11] // November 2026: shifted from 1st week to Tue Nov 10 & Wed Nov 11
};

export function getTopMissionDaysForMonth(year: number, monthIndex: number): [number, number] {
  const override = TOP_MISSION_MONTH_OVERRIDES[`${year}-${monthIndex}`];
  if (override) return override;
  const firstTue = getFirstTuesdayOfMonth(year, monthIndex);
  return [firstTue, firstTue + 1];
}

export function isTopMissionDateUTC(year: number, monthIndex: number, dayOfMonth: number): boolean {
  const [tue, wed] = getTopMissionDaysForMonth(year, monthIndex);
  return dayOfMonth === tue || dayOfMonth === wed;
}

export function isTopMissionOverrideMonth(dateUTC: Date): boolean {
  return Boolean(TOP_MISSION_MONTH_OVERRIDES[`${dateUTC.getUTCFullYear()}-${dateUTC.getUTCMonth()}`]);
}

export function doesServiceRunOnUTCDate(svc: WeeklyService, dateUTC: Date): boolean {
  if (svc.scheduleType === 'monthly-first-tue-wed') {
    return isTopMissionDateUTC(
      dateUTC.getUTCFullYear(),
      dateUTC.getUTCMonth(),
      dateUTC.getUTCDate()
    );
  }
  return dateUTC.getUTCDay() === svc.dayOfWeek;
}

export function getNextServiceOccurrence(svc: WeeklyService, nowMs = Date.now()): Date {
  const now = new Date(nowMs);
  for (let offset = 0; offset <= 45; offset++) {
    const candidate = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + offset,
        svc.hourGMT,
        svc.minuteGMT,
        0
      )
    );
    if (doesServiceRunOnUTCDate(svc, candidate) && candidate.getTime() > nowMs) {
      return candidate;
    }
  }
  return new Date(nowMs + 86400000);
}

export interface NextGatheringState {
  service: WeeklyService;
  isLive: boolean;
  targetDate: Date;
  targetDateFormatted: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  localTimeFormatted: string;
  localDayFormatted: string;
  gmtFormatted: string;
  timezoneName: string;
  isSameAsGMT: boolean;
  humanWhen: string;
  compactCountdown: string;
}

const DAY_NAMES_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function getVisitorTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

export function formatGMTServiceInLocal(dayOfWeek: number, hourGMT: number, minuteGMT: number, referenceDate?: Date) {
  const tz = getVisitorTimezone();
  const base = referenceDate ? new Date(referenceDate.getTime()) : new Date();
  const currentDay = base.getUTCDay();
  const diffDays = referenceDate ? 0 : (dayOfWeek - currentDay + 7) % 7;

  const candidate = referenceDate
    ? base
    : new Date(Date.UTC(
        base.getUTCFullYear(),
        base.getUTCMonth(),
        base.getUTCDate() + diffDays,
        hourGMT,
        minuteGMT,
        0
      ));

  const gmtStr = `${String(hourGMT).padStart(2, '0')}:${String(minuteGMT).padStart(2, '0')} GMT`;

  try {
    const localHour24 = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: tz
    }).format(candidate);

    const localTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: tz
    }).format(candidate);

    const localDay = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      timeZone: tz
    }).format(candidate);

    const localDayFull = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      timeZone: tz
    }).format(candidate);

    const shortTz = new Intl.DateTimeFormat('en-US', {
      timeZoneName: 'short',
      timeZone: tz
    }).formatToParts(candidate).find(p => p.type === 'timeZoneName')?.value || tz;

    const expectedGmt24 = `${String(hourGMT).padStart(2, '0')}:${String(minuteGMT).padStart(2, '0')}`;
    const isSameAsGMT =
      (localHour24 === expectedGmt24 && localDay === DAY_NAMES_SHORT[dayOfWeek]) ||
      shortTz === 'GMT' ||
      shortTz === 'UTC';

    return {
      gmt: gmtStr,
      localTime,
      localDay,
      localDayFull,
      shortTz,
      fullTz: tz,
      isSameAsGMT
    };
  } catch {
    return {
      gmt: gmtStr,
      localTime: gmtStr,
      localDay: DAY_NAMES_SHORT[dayOfWeek],
      localDayFull: DAY_NAMES_FULL[dayOfWeek],
      shortTz: 'GMT',
      fullTz: 'GMT',
      isSameAsGMT: true
    };
  }
}

export function computeNextGatheringForServices(
  services: WeeklyService[],
  nowMs = Date.now()
): NextGatheringState {
  const now = new Date(nowMs);
  let activeLive: { service: WeeklyService; start: Date; end: Date } | null = null;
  let soonestNext: { service: WeeklyService; start: Date } | null = null;

  for (const svc of services) {
    for (let offset = -1; offset <= 45; offset++) {
      const d = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + offset,
        svc.hourGMT,
        svc.minuteGMT,
        0
      ));
      if (!doesServiceRunOnUTCDate(svc, d)) continue;
      const end = new Date(d.getTime() + svc.durationMinutes * 60 * 1000);

      if (now >= d && now < end) {
        activeLive = { service: svc, start: d, end };
        break;
      }
      if (d > now) {
        if (!soonestNext || d < soonestNext.start) {
          soonestNext = { service: svc, start: d };
        }
        break;
      }
    }
  }

  const chosen = activeLive
    ? { service: activeLive.service, targetDate: activeLive.start, isLive: true }
    : soonestNext
      ? { service: soonestNext.service, targetDate: soonestNext.start, isLive: false }
      : { service: services[0] || WEEKLY_SERVICES[0], targetDate: new Date(nowMs + 86400000), isLive: false };

  const diff = Math.max(0, chosen.targetDate.getTime() - nowMs);
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  const fmt = formatGMTServiceInLocal(
    chosen.targetDate.getUTCDay(),
    chosen.service.hourGMT,
    chosen.service.minuteGMT,
    chosen.targetDate
  );

  // Build natural human day phrasing (Today / Tonight / Tomorrow / Sunday)
  const sameLocalDate =
    now.toDateString() === chosen.targetDate.toDateString();
  const tomorrowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const isTomorrow = tomorrowDate.toDateString() === chosen.targetDate.toDateString();

  let dayPhrase = fmt.localDayFull;
  if (sameLocalDate) {
    dayPhrase = chosen.targetDate.getHours() >= 18 ? 'Tonight' : 'Today';
  } else if (isTomorrow) {
    dayPhrase = 'Tomorrow';
  }

  const humanWhen = fmt.isSameAsGMT
    ? `${dayPhrase} at ${fmt.gmt}`
    : `${dayPhrase} at ${fmt.localTime} ${fmt.shortTz} (${fmt.gmt})`;

  let targetDateFormatted = '';
  try {
    targetDateFormatted = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: fmt.fullTz === 'GMT' ? 'UTC' : fmt.fullTz
    }).format(chosen.targetDate);
  } catch {
    targetDateFormatted = chosen.targetDate.toUTCString().slice(0, 11);
  }

  let compactCountdown = '';
  if (chosen.isLive) {
    compactCountdown = 'Live right now';
  } else if (days > 0) {
    compactCountdown = `in ${days}d ${hours}h`;
  } else if (hours > 0) {
    compactCountdown = `in ${hours}h ${minutes}m`;
  } else {
    compactCountdown = `in ${Math.max(1, minutes)} min`;
  }

  return {
    service: chosen.service,
    isLive: chosen.isLive,
    targetDate: chosen.targetDate,
    targetDateFormatted,
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    localTimeFormatted: `${fmt.localTime} ${fmt.shortTz}`,
    localDayFormatted: fmt.localDay,
    gmtFormatted: fmt.gmt,
    timezoneName: fmt.fullTz,
    isSameAsGMT: fmt.isSameAsGMT,
    humanWhen,
    compactCountdown
  };
}

export function computeNextGathering(nowMs = Date.now()): NextGatheringState {
  return computeNextGatheringForServices(WEEKLY_SERVICES, nowMs);
}

export function computeServiceCountdown(
  service: WeeklyService,
  nowMs = Date.now()
): NextGatheringState {
  return computeNextGatheringForServices([service], nowMs);
}

export function computeAutoTheme(mode: 'auto' | 'light' | 'dark'): 'light' | 'dark' {
  if (mode === 'light' || mode === 'dark') return mode;
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

export function downloadICS(event: {
  title: string;
  description: string;
  startIso: string;
  durationMinutes?: number;
  location?: string;
}) {
  const start = new Date(event.startIso);
  const end = new Date(start.getTime() + (event.durationMinutes || 120) * 60000);
  const toICSDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ephesus Gatherings Worldwide//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@ephesusgatheringsworldwide.org`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location || 'The Son Place, Mikaddo Plaza, Labone Junction, Accra, Ghana & Online'}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
