redux

redux-thunk

lodash

posts and users are from jsonPlaceholder

fetchPostAndUser is a action recreator that calls other action recreator. It itself does not fetch data.

lodash is used to make sure only call every userId once to get the author name.

 _.chain(getState().post)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();