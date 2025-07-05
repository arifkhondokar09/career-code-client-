import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    // console.log(jobs);

    const handleStatus = (e, id) => {
        // console.log(e.target.value, id);

        axios.patch(`https://career-code-client-14ed8.web.app/application/${id}`, { status: e.target.value })
            .then(res => {
                // console.log(res.data);

                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "application status is sucessfully updated",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
            .catch(() =>{
                // console.log(error)
            })

    }
    return (
        <div>
            <h2 className='text-4xl font-semibold'><span className='text-blue-500 '>{jobs.length}  </span>  Applications for  : {id}</h2>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Applicant</th>
                                <th>Github</th>
                                <th>LinkedIn profile</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                jobs.map((job, index) => <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.applicant}</td>
                                    <td>{job.github}</td>
                                    <td>{job.linkedIn}</td>
                                    <td>
                                        <select onChange={(e) => handleStatus(e, job._id)} defaultValue={job.status} className="select" >
                                            <option disabled={true}>Pick  a status</option>
                                            <option>Active</option>
                                            <option>Pending</option>
                                            <option>Reject</option>
                                        </select>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplication;