export const applicationsPromise = (email) => {
    return fetch(`https://career-code-server-chi.vercel.app/applications?email=${email}`,{
        credentials:'include'
    })
        .then(res => res.json())
}