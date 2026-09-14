// =============================================================================
// Events — what's on for the public and for members.
//
// Add one object per event. Past events drop off automatically (see
// upcomingEvents below), so there is no need to delete them; the list is also
// a record. Keep it to the next five or six upcoming events on the home page;
// beyond that the timeline gets crowded.
//
// FIELDS
//   date        ISO date, YYYY-MM-DD. Drives ordering and the month columns.
//   endDate     Optional, for multi-day events.
//   time        Free text, e.g. "9:00–11:00 a.m." Leave out if not fixed.
//   title       Short. Two lines at most on the card.
//   summary     One or two sentences.
//   location    Venue and town, or "Location to confirm".
//   audience    "public"  — open to anyone, the default
//               "members" — SPN members only
//   link        Optional URL for details or registration.
//   host        Optional member slug, links the event to their profile.
// =============================================================================

export const events = [
    // Example — replace with real events and delete this entry.
    // {
    //     date: '2026-10-14',
    //     time: '9:00–11:00 a.m.',
    //     title: 'Monthly network meeting',
    //     summary: 'Members meet, share referrals, and hear a short talk from one of the group.',
    //     location: 'Location to confirm',
    //     audience: 'members',
    // },
];

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/** Parse an ISO date as a local calendar date (avoids the UTC-midnight trap). */
export const parseDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
};

export const monthName = (iso) => MONTHS[parseDate(iso).getMonth()];

/** "Tue 14 Oct" style short date. */
export const shortDate = (iso) =>
    parseDate(iso).toLocaleDateString('en-CA', { weekday: 'short', day: 'numeric', month: 'short' });

/** "Wednesday, October 14, 2026". */
export const longDate = (iso) =>
    parseDate(iso).toLocaleDateString('en-CA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

/**
 * Events on or after today, soonest first. Multi-day events stay listed until
 * their end date has passed.
 */
export const upcomingEvents = (limit = 6, today = new Date()) => {
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return events
        .filter((e) => parseDate(e.endDate || e.date) >= start)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, limit);
};
