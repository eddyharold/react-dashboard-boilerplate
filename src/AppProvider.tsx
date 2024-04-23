import { RouterProvider } from 'react-router-dom';

import React, { useState } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from './common/components/sonner';
import { ThemeProvider } from './common/providers/theme.provider';
import queryClientInstance from './core/configs/query-client.config';
import AppRouting from './routes/AppRouting';

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
        default: d.ReactQueryDevtools,
    }))
);

const AppProvider = () => {
    const [queryClient] = useState(() => queryClientInstance);

    const [showDevtools, setShowDevtools] = React.useState(true);

    React.useEffect(() => {
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster richColors />

            <ThemeProvider defaultTheme="dark" storageKey="investwell-app-theme">
                <RouterProvider router={AppRouting} />
            </ThemeProvider>

            <ReactQueryDevtools initialIsOpen />

            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
        </QueryClientProvider>
    );
};

export default AppProvider;
