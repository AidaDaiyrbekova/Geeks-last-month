import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient ({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry:1,
            staleTime: 30_000
        }
    }
})

export function QueryProvider ({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}
