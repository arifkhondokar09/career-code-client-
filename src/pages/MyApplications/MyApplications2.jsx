import React from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyApplications2 = () => {
    const { user } = useAuth();

    const applications2 = useLoaderData();
    // console.log(applications2);
    const remainingApplications2 = applications2.filter(app => app.applicant === user.email)
    // console.log(remainingApplications2)

    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-semibold'>My aplications so far: {remainingApplications2.length}</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Applicant email</th>
                        <th>Job Title</th>
                        <th>Github</th>
                        <th>LinkedIn</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        remainingApplications2.map((app2, index) =>
                            <tr key={app2._id}>

                                <th>{index + 1}</th>
                                <td >
                                    <img className='w-12' src={app2.company_logo} alt="" />
                                    <p className='text-md font-medium '> {app2.company}</p>

                                </td>
                                <td>{app2.applicant}</td>
                                <td>{app2.title}</td>
                                <td>{app2.github}</td>
                                <td>{app2.linkedIn}</td>
                            </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyApplications2;