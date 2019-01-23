import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

//Action creator
//Named export allows us to export many function from a file

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("./posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`./users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPost()); //make sure post is fetched before move on

  _.chain(getState().post)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

/*
  const uniqueIds = _.uniq(_.map(getState().post, "userId"));
  //console.log(uniqueIds);
  uniqueIds.forEach(id => dispatch(fetchUser(id)));
*/

//whenever we call action creator inside an action creator, make
//sure to dispatch it (e.g. dispatch(fetchPost());  )!  redux thunk will pass dispatch as first arugnment
//automatically invote the function
//

//Only fetch one user once, using lodash memoize.
//!! Not recommended!!!
//You wont be able to re-fetch same user again using this action.
/*
export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
*/

// export const fetchUser = function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

//  //using thunk , we can return a function
// export const fetchPost = () => {

//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: "Fetch_POST", payload: response });
//   };
// };

/*
 Actions must be plain objects.
  Use custom middleware (redux  thunk) for async actions.
  ( async / await)
 */
