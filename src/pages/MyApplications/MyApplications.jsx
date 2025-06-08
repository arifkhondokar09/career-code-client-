import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import ApplicationStats from './ApplicationStats';
import { applicationsPromise } from '../../api/applicationsApi';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div>


            <ApplicationStats></ApplicationStats>

            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <ApplicationList
                    applicationsPromise={applicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;