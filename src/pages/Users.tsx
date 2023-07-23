import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./utils/trpc";

export default function Users() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userToDelete, setUserToDelete] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedAuthorId, setSelectedAuthorId] = useState(0);
  const usersQuery = trpc.getAllUsers.useQuery();
  const addUserMutation = trpc.addUser.useMutation();
  const addPostMutation = trpc.addPost.useMutation();
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

  const addPost = (e: any) => {
    e.preventDefault();
    addPostMutation.mutate({
      authorId: selectedAuthorId,
      title: `${postTitle}`,
      content: `${postContent}`,
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
              <form onSubmit={addPost}>
                <input
                  type="text"
                  placeholder="Add title"
                  onChange={(e) => setPostTitle(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Add content"
                  onChange={(e) => setPostContent(e.target.value)}
                ></input>
                <button
                  type="submit"
                  onClick={() => setSelectedAuthorId(user.id)}
                >
                  Add new post
                </button>
              </form>
              <div>
                Post of user:
                {user.posts.map((post) => {
                  return (
                    <div key={post.id}>
                      <p>Title: {post.title}</p>
                      <p>Content: {post.content}</p>
                    </div>
                  );
                })}
              </div>
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
