import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/query-client';

export function ApiProvider({ children, client = queryClient }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
