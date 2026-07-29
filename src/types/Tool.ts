import type { LucidIcon } from 'lucide-react';

export interface Tool {
     id: number;
  title: string;
  description: string;
  route: string;
  icon: LucidIcon;
}