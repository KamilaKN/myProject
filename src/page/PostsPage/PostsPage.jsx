import React, { useEffect, useState } from "react";
import styles from "./postspage.module.css";
import Posts from "../../components/Posts/Posts";
import postsService from "../../services/posts";
import Filter from "../../components/Filter/Filter";
import ReactPaginate from "react-paginate";

const PostsPage = () => {
    const [sorted, setSorted] = useState("Бесплатный");
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
 
    return (
        <div className={styles.container}>
            <Filter setGridView={setGridView} gridView={gridView} setSorted={setSorted} sorted={sorted} />   
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
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName={styles["pagination-wrapper"]}
                pageLinkClassName={styles["pagination-page"]}
                nextClassName={styles["pagination-next"]}
                activeLinkClassName={styles["pagination-active"]}
            />
        </div>
    );
};

export default PostsPage;
