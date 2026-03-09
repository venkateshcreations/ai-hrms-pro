export const LEAVE_REQUESTS = [
  { id: 1, name: "Aiko Tanaka",    type: "Sick Leave",      from: "Mar 6, 2026",  to: "Mar 10, 2026", days: 5, status: "Approved", avatar: "AT" },
  { id: 2, name: "Carlos Rivera",  type: "Casual Leave",    from: "Mar 12, 2026", to: "Mar 13, 2026", days: 2, status: "Pending",  avatar: "CR" },
  { id: 3, name: "Liam O'Brien",   type: "Earned Leave",    from: "Mar 20, 2026", to: "Mar 27, 2026", days: 8, status: "Pending",  avatar: "LO" },
  { id: 4, name: "Sofia Martínez", type: "Emergency Leave", from: "Mar 3, 2026",  to: "Mar 4, 2026",  days: 2, status: "Approved", avatar: "SM" },
];

export const LEAVE_POLICIES = [
  { name: "Casual Leave",    days: 12,  carry: 3,  encash: false, desc: "For personal work or recreational purposes. Must be applied 2 days in advance." },
  { name: "Sick Leave",      days: 10,  carry: 0,  encash: false, desc: "For illness or medical appointments. Medical certificate required for 3+ consecutive days." },
  { name: "Earned Leave",    days: 24,  carry: 12, encash: true,  desc: "Accrued at 2 days/month. Can be encashed up to 30 days at year end." },
  { name: "Maternity Leave", days: 180, carry: 0,  encash: false, desc: "26 weeks for biological mothers as per Maternity Benefit Act, 2017." },
  { name: "Emergency Leave", days: 3,   carry: 0,  encash: false, desc: "For unforeseen circumstances. Requires manager approval within 24 hours." },
];
