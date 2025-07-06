
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';


const MyPostedJobs = () => {

    const [jobsList, setJobsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`https://career-code-server-chi.vercel.app/jobs?email=${user.email}`, {
        
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobsList(data);
                setLoading(false);
            })

    }, [user?.email]);

    if (loading) {
        return <h2> loading.............. </h2>
    }


    return (
        <div>
            <h1>My total Posted jobs : {jobsList.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Company</th>
                                <th>HR email</th>
                                <th>Job Title</th>
                                <th>location</th>
                                <th>Status</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobsList?.map((job, index) =>

                                    <tr key={job._id}>
                                        <th>{index + 1}</th>
                                        <td >
                                            <img src={job.company_logo} alt="" />
                                            <p className='text-md font-medium '> {job.company}</p>

                                        </td>


                                        <td>{job.hr_email}</td>
                                        <td>{job.title}</td>
                                        <td>{job.location}</td>

                                        <td><Link className='btn btn-primary' to={`/application/${job._id}`}> view Application</Link></td>






                                    </tr>
                                )

                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobs;