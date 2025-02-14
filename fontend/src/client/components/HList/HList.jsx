import styles from './HList.module.css';
import Card1 from '../../../shared/components/Card/Card1/Card1.jsx';
import { useState, useEffect } from 'react';
import API from '../../../shared/utils/API.js';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import loadingPic from '../../../shared/assets/loading.svg';
function HList(props) {
    // State management
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    // Fetch posts khi page thay đổi
    useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${API.get_posts}?page=${currentPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(json => {
            setPosts(json.data);
            setTotalPages(json.pagination.totalPage);
            navigate(`?page=${currentPage}`, { replace: true });
        })
        .catch(err => {
            setError(err.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [currentPage, navigate]);

    // Xử lý chuyển trang
    const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    navigate(`?page=${newPage}`);
    };

    return (
        <div className={styles.hList}> 
            <div className={styles.headingCont}>
            <h1 className={styles.heading}>
                Pop-up posts
            </h1>
            {/* <a href="">View more <i className='ti-angle-right'></i> </a> */}
            </div>
                <button 
                    style={{ display: currentPage === 1 ? 'none' : 'flex' }}
                    className={`${styles.navBut} ${styles.prev}`} 
                    onClick={() => handlePageChange(currentPage-1)}
                >
                    <i className="ti-angle-left"></i>
                </button>

                <button 
                    style={{ display: currentPage === totalPages ? 'none' : 'flex' }}
                    className={`${styles.navBut} ${styles.next}`} 
                    onClick={() => handlePageChange(currentPage+1)}
                >
                    <i className="ti-angle-right"></i>
                </button>   
            <div className={styles.cardContainer}>
            {isLoading? <img src={loadingPic} alt="" className={styles.load}/> : null}
            {error ? <p className={styles.error}>{error}</p> : null}
                {posts.map(post => (
                    <Card1
                        key={post._id} 
                        id={post._id}
                        title={post.title}
                        author={post.author}
                        date={post.createdAt}
                        description={post.description}
                        image={post.thumbnail}
                        category={post.category}
                />            
                ))}
            </div>
            <div className={styles.pagesBut}>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={currentPage === i + 1 ? styles.activePage : ''}>
                {i + 1}
                </button>
            ))}
            </div>
        </div>
    );
}
export default HList;