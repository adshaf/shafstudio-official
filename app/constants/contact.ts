export interface ContactInfo {
  id: number;
  icon: string;
  label: string;
  value: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    id: 1,
    icon: "mail",
    label: "Email",
    value: "ad.shafstudio@gmail.com",
  },
  {
    id: 2,
    icon: "call",
    label: "Phone",
    value: "+61 414 146 060",
  },
  {
    id: 3,
    icon: "location_on",
    label: "Location",
    value: "Sydney NSW 2174",
  },
];
