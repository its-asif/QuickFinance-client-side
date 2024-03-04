
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    
    const axiosSecure =useAxiosSecure()
    
    const { data:allUsers, refetch } = useQuery({
        queryKey: ['users_data'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users`)
            return res.data;
        }
    });
   
 
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl font-semibold my-6">All Users</h1>

            
            <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            User
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Role
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Action
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {allUsers?.map((user,idx) => (
                                        <tr key={idx}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <a href="#" className="relative block">
                                                            <img alt="profil" src={user.photoUrl} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                        </a>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {user.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.email}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {new Date(user.createdAt).toLocaleDateString()} {new Date(user.createdAt).toLocaleTimeString()}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex justify-between items-center">
                <span>
                    {!user.isAdmin && (
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                            <span className="relative">User</span>
                        </span>
                    )}

                    {user.isAdmin && (
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                            <span aria-hidden="true" className="absolute inset-0 bg-red-200 rounded-full opacity-50"></span>
                            <span className="relative">Admin</span>
                        </span>
                    )}
                </span>

                <div>
                    {/* Button to trigger role change */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold btn btn-md  ml-2 py-2 rounded" onClick={() => {
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, admin this user!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                           
                                                            axiosSecure.patch(`/api/users/admin/${user?._id}`)
                                                                .then(response => {
                                                                    console.log(response.data);
                                                                    refetch()
                                                                    Swal.fire(
                                                                        'Success!',
                                                                        'User role has been change.',
                                                                        'success'
                                                                    );
                                                                })
                                                                .catch(error => {
                                                                    console.log(error);
                                                                    Swal.fire(
                                                                        'Error!',
                                                                        'User role is not changed.',
                                                                        'error'
                                                                    );
                                                                });
                                                        }
                                                    });
                                                }}>Change Role</button>
                </div>
            </div>
        </td>
{/*                                             
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                {!user.isAdmin &&
                                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                    </span>
                                                    <span className="relative">
                                                         User
                                                    </span>
                                                </span>
                                                }

                                                {user.isAdmin &&
                                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 rounded-full opacity-50">
                                                    </span>
                                                    <span className="relative">
                                                         Admin
                                                    </span>
                                                </span>
                                                }
                                            </td> */}

                                            {/* delete button */}
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            axiosSecure.delete(`/api/users/admin/${user.email}`)
                                                                .then(response => {
                                                                    console.log(response.data);
                                                                   refetch()
                                                                    Swal.fire(
                                                                        'Deleted!',
                                                                        'User has been deleted.',
                                                                        'success'
                                                                    );
                                                                })
                                                                .catch(error => {
                                                                    console.log(error);
                                                                    Swal.fire(
                                                                        'Error!',
                                                                        'User could not be deleted.',
                                                                        'error'
                                                                    );
                                                                });
                                                        }
                                                    });
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllUsers; 