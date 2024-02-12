'use client'

import { PropsWithChildren } from 'react'

import { Provider } from 'react-redux'
import { getStore } from '@/util/redux/Store'

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
    return (
        <Provider store={getStore()}>
            {children}
        </Provider>
    )
}