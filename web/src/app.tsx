import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ProfileProvider } from './lib/contexts/auth'
import { QueryProvider } from './lib/contexts/query'

export function App() {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <main className='flex flex-1 container max-w-screen-2xl pt-[1.5rem] mb-10'>
        <ProfileProvider>
          <QueryProvider>
            <RouterProvider router={router} />
          </QueryProvider>
        </ProfileProvider>
      </main>
    </div>
  )
}
