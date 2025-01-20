import styles from './HList.module.css';
import Card1 from '../Card/Card1/Card1.jsx';
import { useState, useEffect } from 'react';
import API from '../../API.js';
import { useNavigate } from 'react-router-dom';

function HList(props) {
    const [posts, setPosts] = useState();
    const [page, setPage] = useState(1);
    const [pagesBut, setPagesBut] = useState();
    const navigate = useNavigate();
    function nextPage(){
        if(posts.length < 4) return;
        setPage(page+1);
    }

    function prePage(){
        if(page === 1) return;
        setPage(page-1);
    }

    useEffect(() => {
        fetch(API.get_posts+`?page=${page}`)
        .then(response => response.json())
        .then(json => {
                if (page === 1) {
                    document.querySelector(`.${styles.prev}`).style.display = 'none';
                } else {
                    document.querySelector(`.${styles.prev}`).style.display = 'flex';
                }
                setPosts(json.data.map(post => {
                return <Card1 
                     id={post._id}
                     title={post.title}
                     author={post.author}
                     date={post.createdAt}
                     description={post.description}
                     image={post.thumbnail}
                     category={post.category}
                 />;
                }));
                setPagesBut(
                    Array.from({length: json.pagination.totalPage}, (_, i) => {
                        return <button onClick={() => setPage(i+1)}>{i+1}</button>
                    }
                ));
                if (page > 1) navigate('?page='+page, {replace: true});
            })
    }, [page]);
    return (
        <div className={styles.hList}> 
            <div className={styles.headingCont}>
            <h1 className={styles.heading}>
                Pop-up posts
            </h1>
            {/* <a href="">View more <i className='ti-angle-right'></i> </a> */}
            </div>
                <button className={`${styles.navBut} ${styles.prev}`} onClick={prePage}><i className="ti-angle-left"></i></button>
                <button className={`${styles.navBut} ${styles.next}`} onClick={nextPage}><i className="ti-angle-right"></i></button>
            <div className={styles.cardContainer}>
                {posts}
            </div>
            <div>
                {pagesBut}
            </div>
        </div>
    );
}
export default HList;