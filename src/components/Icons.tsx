"use client";

import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export type LucideIcon = React.ComponentType<IconProps>;

const baseProps = (size: number | string = 24, className?: string, rest?: React.SVGProps<SVGSVGElement>) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  ...rest,
});

export const Phone: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const PhoneCall: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

export const Mail: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowUpRight: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export const CheckCircle2: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const AlertCircle: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const Loader2: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const Lock: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Shield: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Plane: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

export const PlaneTakeoff: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M2 22h20" />
    <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l2.5 1.25L14 11 9.5 2h2.5l5.5 9 3.5-1.75a2 2 0 0 1 2.2.35l.8.8-3.5 7-14.14.0z" />
  </svg>
);

export const BookOpen: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const Briefcase: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

export const Clock: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Calendar: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const FileCheck: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const FileText: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

export const Layers: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

export const Compass: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const Users: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const User: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const UserCheck: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const MessageCircle: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const MessageSquare: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Share2: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...baseProps(size, className, props)}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);
