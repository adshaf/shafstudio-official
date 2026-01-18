import {
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Terminal,
  Palette,
  Stamp,
  Activity,
  Compass,
  Paintbrush,
  Rocket,
  Handshake,
  Grid3X3,
  Fingerprint,
  Calendar,
  Coins,
  Gem,
  Zap,
  Code,
  LayoutGrid,
  Brain,
  TrendingUp,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building2,
  CheckCircle2,
  AlertCircle,
  type LucideProps,
} from "lucide-react";

// Map Material Symbols icon names to Lucide components
const iconMap = {
  menu: Menu,
  close: X,
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  arrow_outward: ExternalLink,
  mail: Mail,
  call: Phone,
  location_on: MapPin,
  terminal: Terminal,
  design_services: Palette,
  branding_watermark: Stamp,
  monitoring: Activity,
  travel_explore: Compass,
  format_paint: Paintbrush,
  rocket_launch: Rocket,
  handshake: Handshake,
  grid_4x4: Grid3X3,
  fingerprint: Fingerprint,
  calendar_today: Calendar,
  token: Coins,
  diamond: Gem,
  bolt: Zap,
  deployed_code: Code,
  grid_view: LayoutGrid,
  psychology: Brain,
  trending_up: TrendingUp,
  format_quote: Quote,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  architecture: Building2,
  check_circle: CheckCircle2,
  error: AlertCircle,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }

  return <LucideIcon {...props} />;
}
