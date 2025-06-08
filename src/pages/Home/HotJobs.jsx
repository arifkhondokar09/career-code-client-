import React, { use } from 'react';
import JobCard from './JobCard';




const HotJobs = ({jobsPromise}) => {
    const jobs= use(jobsPromise);

    
    return (
        <div>
           <h2 className='text-4xl text-center font-bold my-10'>Total Jobs : {jobs.length}</h2>
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 m-5'>
            {
                jobs?.map(job=><JobCard key={job._id} job={job}></JobCard> )
            }
           </div>
        </div>
    );
};

export default HotJobs;