export const applicationsPromise = (email) => {
    return fetch(`https://career-code-server-lake.vercel.app/applications?email=${email}`,{
        credentials:'include'
    })
        .then(res => res.json())
}