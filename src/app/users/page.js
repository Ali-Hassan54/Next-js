async function getUserList() {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      return data.users;
  }
  const User=async()=>{
    let users=await getUserList();
    return(
        <>
            <h1>User lists</h1>
            {
                users.map((user)=>{
                    return (
                        <div key={user.id}>
                        <p>Name is:{user.id}</p>

                        <p>Name is:{user.firstName}</p>
                        <p>User id is:{user.age}</p>
                        </div>
                    )
                })
            }
        </>
    )
  }
  export default User;
// export  async function Users(){
    
// }
  