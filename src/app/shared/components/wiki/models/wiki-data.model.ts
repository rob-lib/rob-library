export interface WikiData {
  title: string;
  tab: TabComponent[];
}

interface TabComponent {
  label: string;
  title?: string;
  description?: string;
  exampleCode: {
    /** default value: 'auto' */
    width?: 'auto' | 'max-content';
    text: string;
  };
}
