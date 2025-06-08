
import { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobsPromise= fetch("http://localhost:5000/allJobs",{
  credentials:'include'
}).then(res=> res.json());
const Home = () => {

  
    return (
        <div>
          <Banner></Banner>
          <Suspense  fallback={<h2 className='text-3xl font-semibold text-center'>Loading...</h2>}>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
          </Suspense>
        </div>
    );
};

export default Home;