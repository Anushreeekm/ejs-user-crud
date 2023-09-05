let users = document.querySelector("#users");


//delete user
const deleteUser = async (id) => {
    if(window.confirm(`Are you sure to delete user? `)) {
        console.log('id =', id)
        await fetch(`http://localhost:4250/api/user/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
    .then(res => {
        window.alert(res.msg)
        window.location.reload()
    }).catch(err => window.alert(err.message))
    }
}
// print data
function printData(data) {
    data.forEach(item => {
        users.innerHTML = `<div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 class="card-title text-center"> ${item.name} </h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                    <strong>Email</strong>
                                    <span class="text-success float-end"> ${item.email} </span> 
                                    </li>
                                    <li class="list-group-item">
                                    <strong>Mobile</strong>
                                    <span class="text-success float-end"> ${item.mobile} </span> 
                                    </li>
                                    <li class="list-group-item">
                                    <strong>Qualification</strong>
                                    <span class="text-success float-end"> ${item.qualification} </span> 
                                    </li>
                                    <li class="list-group-item">
                                    <strong>Gender</strong>
                                    <span class="text-success float-end"> ${item.gender} </span> 
                                    </li>
                                    <li class="list-group-item">
                                    <strong>Address</strong>
                                    <span class="text-success float-end"> ${item.address} </span> 
                                    </li>
                                </ul>
                            </div>
                                <div className="card-footer">
                                <a href=/user/>edit?id=${item._id} class="btn btn-success">Edit</a>
                                <button onClick="deleteUser('${item._id}')" className="btn btn-danger float-end">Delete</button>

                                </div>
                        </div>
                            </div>`;
    })
}
