import { fetchDataAction, fetchMoreDataAction } from "../reducers/dataReducer";

export const fetchData = (limit, page) => {
  const getData = (type) =>
    fetch(
      `https://jsonplaceholder.typicode.com/${type}?_page=1&_limit=${limit}`
    ).then((response) => response.json());
  const getPhotos = (type) =>
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((response) =>
      response.json()
    );
  return (dispatch) => {
    Promise.all([
      ...["posts", "users"].map(getData),
      ...["photos"].map(getPhotos),
    ]).then(([posts, users, photos]) => {
      const dataObj = Object.fromEntries(
        users.map((user) => [user.id, user, ...photos])
      );
      dispatch(
        fetchDataAction(
          posts.map((post) => ({
            post,
            user: dataObj[post.id % 10 || 10],
            photos: photos.filter((item) => item.albumId === post.id),
          }))
        )
      );
    });
  };
};
export const fetchMoreData = (limit, page, setPage) => {
  const getUsers = () =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json()
    );
  const getPosts = () =>
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    ).then((response) => response.json());
  const getPhotos = () =>
    fetch(`https://jsonplaceholder.typicode.com/photos`).then((response) =>
      response.json()
    );
  return (dispatch) => {
    Promise.all([
      ...["posts"].map(getPosts),
      ...["users"].map(getUsers),
      ...["photos"].map(getPhotos),
    ]).then(([posts, users, photos]) => {
      setPage(page + 1);
      const resultData = posts.map((post, i) => ({
        post,
        user: users.filter((user) => {
          if (limit === 10) {
            return user.id === (post.id % limit) + 1;
          } else {
            return user.id - 1 === post.id % limit;
          }
        })[0],
        photos: photos.filter((item) => item.albumId === post.id),
      }));
      dispatch(fetchMoreDataAction(resultData));
    });
  };
};
