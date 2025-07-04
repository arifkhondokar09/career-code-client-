import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';





const HotJobs = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch('https://career-code-server-lake.vercel.app/allJobs', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data);
            })
    }, []);

    if (jobs.length === 0) {
        return <h2>LOADING...........................................</h2>
    }


    return (
        <div >
            <h2 className='text-4xl text-center font-bold my-10'>Total Jobs : {jobs.length}</h2>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 m-5'>
                {
                    jobs?.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;