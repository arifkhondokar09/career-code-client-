export const applicationsPromise = (email) => {
    return fetch(`https://career-code-client-14ed8.web.app/applications?email=${email}`,{
        credentials:'include'
    })
        .then(res => res.json())
}