import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./utils/trpc";

export default function Users() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userToDelete, setUserToDelete] = useState("");
  const usersQuery = trpc.getAllUsers.useQuery();
  const addUserMutation = trpc.addUser.useMutation();
  const deleteUserMutation = trpc.deleteUser.useMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addUserMutation.mutate({
      email: `${email}`,
      name: `${name}`,
    });
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteUserMutation.mutate({
      email: `${userToDelete}`,
    });
  };

  if (usersQuery.isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name of new user"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter email of new user"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit">Add new user</button>
      </form>
      <form onSubmit={handleDelete}>
        <input
          type="email"
          placeholder="Enter email of user to delete"
          onChange={(e) => setUserToDelete(e.target.value)}
        ></input>
        <button type="submit">Delete user</button>
      </form>
      <div>
        {usersQuery.data?.map((user) => {
          return (
            <div key={user.id}>
              <p>Id of user: {user.id}</p>
              <p>Name of user: {user.name}</p>
              <p>Email of user: {user.email}</p>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );

  //   return (
  //     usersQuery.data && (
  //       <div>
  //         {usersQuery.data}
  //         <p>Id of user: {usersQuery.data.}</p>
  //         <p>Name of user: {usersQuery.data.title}</p>
  //         <p>Email of user: {usersQuery.data.body}</p>
  //       </div>
  //     )
  //   );
}
