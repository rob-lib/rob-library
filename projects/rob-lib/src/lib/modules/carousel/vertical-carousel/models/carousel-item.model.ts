export interface CarouselItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface CarouselItemPartial {
  icon: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}
