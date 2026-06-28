/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  description: string;
  benefitTitle: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  color: string;
  accentColor: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  type: "upload" | "classification" | "distribution" | "esg";
}

export interface SDGItem {
  number: number;
  title: string;
  description: string;
  pantasContribution: string;
  color: string;
  borderColor: string;
  bgGlow: string;
}

export interface RoadmapMilestone {
  year: string;
  location: string;
  target: string;
  focus: string;
  status: "completed" | "current" | "upcoming";
}

export interface ESGMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  unit: string;
}
