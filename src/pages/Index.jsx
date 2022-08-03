import React, { createRef, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { fetchData, fetchMoreData } from "../store/asyncActions/data";

const Index = () => {
  const [photoIndex] = useState(Math.round(Math.random() * 50));
  const [page, setPage] = useState(2);
  const [limit] = useState(Math.round(Math.random() * 10) + 5);
  const totalPages = Math.ceil(100 / limit)
  const dispatch = useDispatch();
  const userDataArr = useSelector((state) => state.userData);
  const lastItem = createRef();
  const observerLoader = useRef()
  useEffect(() => {
    dispatch(fetchData(limit));
  }, [dispatch, limit]);
  
  useEffect(()=>{
    const loadPostsInSight = (entries) =>{
    if (entries[0].isIntersecting && page < totalPages){
      dispatch(fetchMoreData(10, page, setPage));
    }
  }
    if (observerLoader.current){
      observerLoader.current.disconnect()
    }
    observerLoader.current = new IntersectionObserver(loadPostsInSight)
    if (lastItem.current){
      observerLoader.current.observe(lastItem.current)
    }
  }, [dispatch, lastItem, limit, page, totalPages])
  

  return (
    <div className="index">
      {Object.entries(userDataArr).length > 1 &&
        userDataArr.map((userDataItem, i) => {
          if (i + 1 === userDataArr.length) {
            return (
              <PostItem
                text={userDataItem?.post?.body}
                key={i}
                title={userDataItem?.post?.title}
                author={userDataItem?.user?.name}
                company={userDataItem?.user?.company?.name}
                img={userDataItem?.photos[photoIndex]?.thumbnailUrl}
                ref={lastItem}
              />
            );
          } else {
            return (
              <PostItem
                text={userDataItem?.post?.body}
                key={i}
                title={userDataItem?.post?.title}
                author={userDataItem?.user?.name}
                company={userDataItem?.user?.company?.name}
                img={userDataItem?.photos[photoIndex]?.thumbnailUrl}
              />
            );
          }
        })}
    </div>
  );
};

export default Index;
