import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (
//     result.error &&
//     result.error.status === 401 &&
//     api.endpoint !== "login" &&
//     api.endpoint !== "signOut"
//   ) {
//     if (!mutex.isLocked()) {
//       const release = await mutex.acquire();
//       try {
//         const refreshResult = await baseQuery(
//           {
//             url: `${API_CONSTANTS.EVO_AUTHENTICATION_BASE_URL}${API_CONSTANTS.REFRESH_TOKEN}`,
//             method: "POST",
//             headers: {
//               "Content-type": "application/json; charset=UTF-8",
//             },
//             credentials: "include",
//           },
//           api,
//           extraOptions
//         );
//         if (refreshResult.data) {
//           result = await baseQuery(args, api, extraOptions);
//         } else {
//           UserService.logOut();
//         }
//       } catch (e: any) {
//         UserService.logOut();
//       } finally {
//         release();
//       }
//     } else {
//       await mutex.waitForUnlock();
//       result = await baseQuery(args, api, extraOptions);
//     }
//   }
//   return result;
// };

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
export default baseApi;
