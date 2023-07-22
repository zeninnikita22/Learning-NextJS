import Form from "./Form";
import Posts from "./Posts";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { trpc } from "./utils/trpc";

export default function Home() {
  //   const [id, setId] = useState("");

  //   return (
  //     <>
  //       <Form id={id} setId={setId} />
  //       <Posts id={id} />
  //     </>
  //   );
  // }

  const [categoryName, setCategoryName] = useState("");
  // const [updatedCategoryName, setUpdatedCategoryName] = useState("");
  // const [updateCategoryId, setUpdateCategoryId] = useState("");
  // const [selectedUpdateIds, setSelectedUpdateIds] = useState([]);
  const queryClient = useQueryClient();
  const createAddMutatation = trpc.addCategory.useMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createAddMutatation.mutate({
      name: `${categoryName}`,
    });
    console.log(`Changed name of category to ${categoryName}`);
  };

  // const axios = require("axios");
  // const categoryQuery = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () =>
  //     axios.get("http://localhost:1337/api/categories/").then(
  //       ({ data }) => {
  //         return data;
  //       }
  //       // console.log(data);
  //     ),
  // });

  // const deleteCategoryMutation = useMutation({
  //   mutationFn: (deleteCategoryId) =>
  //     axios
  //       .delete(`http://localhost:1337/api/categories/${deleteCategoryId}`)
  //       .then((response) => response.data),
  // });
  // const updateCategoryMutation = useMutation({
  //   mutationFn: (updateCategoryId, updatedCategory) =>
  //     axios
  //       .put(
  //         `http://localhost:1337/api/categories/${updateCategoryId}`,
  //         updatedCategory
  //       )
  //       .then((response) => response.data),
  // });

  // if (categoryQuery.isLoading) return <h2>Loading!</h2>;
  // if (categoryQuery.isError) return <h2>Error!</h2>;

  // console.log(categoryQuery);
  // const dataOfCategoryQuery = categoryQuery.data;

  //   newCategoryMutation.mutate(newCategory, {
  //     onSuccess: async () => {
  //       console.log("new category created!");
  //       await queryClient.refetchQueries("categories");
  //     },
  //   });
  // }

  // function deleteCategory({ id }) {
  //   const deleteCategoryId = id;
  //   // console.log(id);
  //   // setDeleteCategoryId(id);
  //   // console.log(categoryId);
  //   deleteCategoryMutation.mutate(deleteCategoryId, {
  //     onSuccess: async () => {
  //       console.log("category deleted!");
  //       await queryClient.refetchQueries("categories");
  //     },
  //   });
  // }

  // function updateCategory(e) {
  //   // event.preventDefault();
  //   // console.log(event);
  //   // console.log(updateCategoryId);
  //   // setUpdateCategoryId(event.id);
  //   setUpdatedCategoryName(e.target[0].value);

  //   const updatedCategory = {
  //     data: {
  //       name: updatedCategoryName,
  //     },
  //   };
  //   updateCategoryMutation.mutate(updatedCategory, {
  //     onSuccess: async () => {
  //       console.log("category updated!");
  //       await queryClient.refetchQueries("categories");
  //     },
  //   });
  // }

  // function handleClick(e) {
  //   setUpdateCategoryId(e.id);
  //   const idExists = selectedUpdateIds.includes(e.id);

  //   if (idExists) {
  //     const filteredIds = selectedUpdateIds.filter(
  //       (selectedUpdateId) => selectedUpdateId !== e.id
  //     );
  //     setSelectedUpdateIds(filteredIds);
  //   } else {
  //     setSelectedUpdateIds([...selectedUpdateIds, e.id]);
  //   }
  // }

  // function UpdateInput(e) {
  //   return (
  //     <div>
  //       <form onSubmit={updateCategory}>
  //         <input
  //           type="text"
  //           placeholder="update the name"
  //           value={updatedCategoryName}
  //           onChange={(e) => setUpdatedCategoryName(e.target.value)}
  //         ></input>
  //         <button type="submit">Update</button>
  //       </form>
  //     </div>
  //   );
  // }

  // ===

  // function openSection() {
  //   setUpdateSectionToggled(!updateSectionToggled);
  // }

  // const handleCreatePost = (event) => {
  //   event.preventDefault();
  //   const newPost = {
  //     title: event.target.elements.title.value,
  //     body: event.target.elements.body.value,
  //   };
  //   createPostMutation
  //     .mutate(newPost)
  //     .then(() => {
  //       queryClient.invalidateQueries("posts");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <div>Temporary page for requests</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type a name of new category here"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        ></input>
        <button type="submit">Add new category</button>
      </form>

      {/* <div>
        {categoryQuery.isSuccess
          ? dataOfCategoryQuery.data.map((e) => {
              return (
                <div key={e.id}>
                  <div>{e.attributes.name}</div>
                </div>
              );
            })
          : null}
      </div> */}
    </>
  );
}
