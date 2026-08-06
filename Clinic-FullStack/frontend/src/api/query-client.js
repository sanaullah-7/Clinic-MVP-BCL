import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3e4,
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    }
  }
});
const STALE_TIMES = {
  calendar: 3e4,
  settings: 3e5,
  billing: 0,
  patients: 6e4
};
const queryKeys = {
  auth: {
    me: ["auth", "me"]
  },
  patients: {
    all: ["patients"],
    list: (params) => ["patients", "list", params],
    detail: (id) => ["patients", id]
  },
  appointments: {
    all: ["appointments"],
    calendar: (params) => ["appointments", "calendar", params]
  }
};
export {
  STALE_TIMES,
  queryClient,
  queryKeys
};
