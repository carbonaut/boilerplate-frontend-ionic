export interface ToastMessage {
  animationDuration?: number;
  key?: number;
  message?: string;
  type?: 'error' | 'info' | 'loading' | 'success' | 'neutral' | 'warning';
  icon?: string;
  button?: string;
  timeout?: number;
  visible?: boolean;
  unique?: boolean;
  onClick?(): void;
  onDismiss?(): void;
}
