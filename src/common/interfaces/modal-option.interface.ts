export interface IModalOption<T = null, K = 'add' | 'update' | 'delete' | 'confirm'> {
  data?: T;
  type: K;
  state?: boolean;
  title?: string;
}
