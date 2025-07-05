
import React, { use } from 'react';


const ApplicationList = ({ applicationsPromise }) => {
    const applications = use(applicationsPromise);



    return (
        <div>
            <h1 className="text-3xl">My total applications so far : {applications.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Company</th>
                                <th>Applicant email</th>
                                <th>Status</th>
                                <th>Job Title</th>
                                <th>Github URL</th>
                             
                                <th>Resume Link</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications?.map((app, index) =>

                                    <tr key={app._id}>
                                        <th>{index + 1}</th>
                                        <td >
                                            <img src={app.company_logo} alt="" />
                                            <p className='text-md font-medium '> {app.company}</p>

                                        </td>

                                        <td>{app.applicant} </td>
                                        <td>{app.status} </td>
                                        <td>{app.title}</td>
                                        <td>{app.github}</td>
                                        
                                        <td>{app.resume}</td>
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

export default ApplicationList;