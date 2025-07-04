import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const AddJob = () => {


    const { user } = use(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const info = Object.fromEntries(formData.entries())

        const { salaryMax, salaryMin, currency, ...newJob } = info;
        // special two lines ********************###################
        newJob.salaryRange = { salaryMin, salaryMax, currency };

        newJob.requirements = newJob.requirements.split(",").map(req => req.trim());
        newJob.responsibilities = newJob.responsibilities.split(",").map(res => res.trim());

        newJob.status = "active"

        axios.post("https://career-code-server-lake.vercel.app/jobs", newJob)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been posted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error =>{
                //  console.log(error)
            })

    }
    return (
        <div className='m-10 text-center '>
            <h1 className="text-4xl font-bold mb-5">Add job</h1>
            <form onSubmit={handleSubmit} className="flex justify-center  ">

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />


                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="url" name='logoURL' className="input" placeholder="Company Logo URL" />


                    {/* filter */}
                    <label className="label">Job Type</label>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value='Remote' />
                        <input className="btn" type="radio" name="jobType" aria-label="Full-Time" value='Full-Time' />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value='Hybrid' />
                    </div>

                    {/* select option in DaisyUi */}
                    <label className="label">Job Category</label>

                    <select defaultValue="" name='category' className="select">
                        <option value='' disabled>
                            Pick a Category
                        </option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                        <option>Management</option>
                        <option>Data science</option>
                    </select>

                    {/* input type date */}
                    <label className="label">Application Deadline</label>
                    <input type="date" name="deadline" className="input" />




                    {/* salary info */}
                    <label className="label font-medium text-lg">Salary Range </label>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                        <div>
                            <label className="label">Minimum Salary</label>

                            <input type="text" className="input" name='min' placeholder="Min." />
                        </div>
                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" className="input" name='max' placeholder="Max." />
                        </div>
                        <div>
                            <label className="label">Currency</label>

                            <select defaultValue="Pick a Currency" name='currency' className="select ">
                                <option disabled={true}>Pick a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EURO</option>
                            </select>
                        </div>

                    </div>

                    {/* description  textarea */}

                    <label className="label ">Description</label>

                    <textarea name='description' className="textarea" placeholder="Description"></textarea>

                    {/* requirements */}
                    <label className="label ">Requirements</label>

                    <textarea name='requirements' className="textarea" placeholder="Requirements(seperate by comma)"></textarea>

                    {/* Responsibilities textarea daisyui */}
                    <label className="label ">Responsibilities</label>

                    <textarea name='responsibilities' className="textarea" placeholder="Responsibilities(sperate by comma)"></textarea>


                    {/* HR related info */}

                    <label className="label text-lg font-medium">HR related info</label>

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' className="input" placeholder='HR Email' defaultValue={user.email} />

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name " defaultValue={user.displayName} />

                    <input type="submit" className='btn btn-primary' value="Add job" />
                </fieldset>


            </form>
        </div>
    );
};

export default AddJob;