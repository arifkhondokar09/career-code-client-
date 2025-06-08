import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';



const Applyjob = () => {
    const { user } = useAuth()

    const { id: jobId } = useParams();

    console.log(user, jobId)


    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value;
        console.log(github, linkedIn, resume);
        const application = {
            jobId,
            applicant: user.email,
            github,
            linkedIn,
            resume
        };
        axios.post("http://localhost:5000/applications", application)
            .then(data => {
                console.log(data.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
                // form.reset();

            })
            .catch(error => {
                console.log(error)
            })




    }
    return (
        <div>
            <h1>apply jobs for this job : <Link to={`/jobs/${jobId}`}></Link></h1>
            <form onSubmit={handleSubmit} >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input" placeholder="Github url" />

                    <label className="label">LinkedIn link</label>
                    <input type="url" name='linkedIn' className="input" placeholder="LinkedIn url" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Resume url" />
                    <input type="submit" className='btn btn-primary mt-3' value="Submit" />
                </fieldset>
            </form>
        </div>
    );
};

export default Applyjob;