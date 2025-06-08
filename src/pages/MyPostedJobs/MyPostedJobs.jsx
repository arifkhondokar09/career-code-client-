import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import JobsList from './JobsList';
import { jobsPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const{user}= use(AuthContext);


    return (
        <div>
            
            <Suspense fallback={<h1>data is loading....</h1>}> 
<JobsList jobsPromise={jobsPromise(user.email)}></JobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;