import { MainDashboard } from '@/pages/dashboard/MainDashboard';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainDashboard />,
    },
]);

export default router;
