'use client'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center">
        {children}
    </div>
  )
}

