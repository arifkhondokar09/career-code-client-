import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, location, category, jobType, salaryRange, currency, requirements,company_logo,company,description } = job;

    return (
        <div className="card bg-base-100  shadow-sm bg-gray-200 p-3">
           <div className='flex items-center'>
             <figure>
                <img
                    src={company_logo}
                    className='w-16'
                    alt="Shoes" />
            </figure>
            <div >
                <p className='text-xl font-semibold'>{company}</p>
                <p className='flex items-center text-xs text-gray-400 font-medium gap-1'><FaLocationDot /> {location}</p>
            </div>
            <div>

            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">
                   { title}
                   
                   
                </h2>
                <p>{description}</p>
                <div className="card-actions ">
                    {
                        requirements.map((require,index) =>  <div key={index} className="badge badge-outline">{require}</div>)
                    }
                   
                    
                </div>
               
            </div>
            <div className='flex justify-around'>
                <p><span className='font-medium text-sm'>Salary Range :</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
                 <Link to={`/jobs/${_id}`}>
                 <button className='btn btn-primary rounded-xl'>Job details</button>
                 </Link>
               </div>
        </div>
    );
};

export default JobCard;