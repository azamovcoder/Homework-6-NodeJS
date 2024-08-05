import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["User"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/users/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["User"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/users/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/users/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useRegisterUserMutation,
  useSignInMutation,
} = userApi;
