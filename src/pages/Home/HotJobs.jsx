import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';





const HotJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setJobs(data);
                setLoading(false);

            })
    }, []);


    if (loading) {
        return <h2 className='text-center text-3xl mt-10 font-semibold'> Loading.........</h2>
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