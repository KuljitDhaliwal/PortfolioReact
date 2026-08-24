const API = import.meta.env.VITE_API
export async function  githubProjects(){
    const res = await fetch('https://api.github.com/users/KuljitDhaliwal/repos?per_page=100',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()

    if(!res.ok){
        throw new Error(data || 'Something not good')
    }

    console.log('Data', data)

    return data
}