'use client'
import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from '../redux/store'
import {NextUIProvider} from "@nextui-org/react";
const inter = Inter({ subsets: ['latin'] })

let persistor = persistStore(store);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 `}>
          <ReduxProvider>
            <PersistGate persistor={persistor}>
              {children}
            </PersistGate>
          </ReduxProvider>
      </body>
    </html>
  )
}
