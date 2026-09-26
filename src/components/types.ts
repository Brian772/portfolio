export type TabType = "home" | "about" | "work" | "process" | "contact";

export interface ClubItem {
  tag: string;
  tagBg: string;
  members: string;
  name: string;
  desc: string;
  location: string;
}

export interface MetaItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
}
