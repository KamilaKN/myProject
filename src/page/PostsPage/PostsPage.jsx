import React, { useEffect, useState } from "react";
import styles from "./postspage.module.css";
import Posts from "../../components/Posts/Posts";
import postsService from "../../services/posts";
import Filter from "../../components/Filter/Filter";
import ReactPaginate from "react-paginate";

const PostsPage = () => {
    // const [sorted, setSorted] = useState("free");
    const [posts, setPosts] = useState([]);

    const [gridView, setGridView] = useState(true)

    //пагинация
    const [postOffset, setPostOffset] = useState(0);
    const postsPerPage = 4;

    const endOffset = postOffset + postsPerPage;
    // console.log(`Loading items from ${postOffset} to ${endOffset}`);
    const currentPosts = posts.slice(postOffset, endOffset);
    const pageCount = Math.ceil(posts.length / postsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * postsPerPage;
        setPostOffset(newOffset);
    };

    useEffect(() => {
        postsService.getPosts().then((res) => {
            setPosts(res.data);
        });
    }, []);

    // useEffect(() => {
    //     if(sorted == "free") {
    //      const sortedPosts = [...posts].sort((a, b) => a.price > b.price)
    //      setPosts(sortedPosts)
    //     }
    // }, [sorted]);
    return (
        <div>
            <Filter setGridView={setGridView} gridView={gridView} />   {/*setSorted={setSorted} sorted={sorted} */}
            <section className={styles["posts-wrapper"]}>
                {currentPosts.map((posts) => {
                    return (
                        <Posts
                        gridView={gridView}
                            key={posts.id}
                            img={posts.img}
                            title={posts.title}
                            price={posts.price}
                            date={posts.date}
                            location={posts.location}
                            id={posts.id}
                        />
                    );
                })}
            </section>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default PostsPage;
