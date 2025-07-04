export const jobsPromise = email=> {
   return fetch( `https://career-code-server-lake.vercel.app/jobs?email=${email}`,{
      credentials:'include'
   }).then(res=> res.json());
}