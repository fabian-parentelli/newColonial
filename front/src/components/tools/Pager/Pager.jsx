import './pager.css';

const Pager = ({ docs, setQuery }) => {

    const handleChangePage = (page) => {
        setQuery((preQuery) => ({ ...preQuery, page }));
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <div className='paginator'>
            {docs && docs.hasPrevPage === true &&
                <p className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.prevPage)}
                >
                    {docs.prevPage}
                </p>
            }

            {docs && docs.page && <p className='paginatorActualPage'>{docs.page}</p>}

            {docs && docs.hasNextPage === true &&
                <p className='paginatorNextPage'
                    onClick={() => handleChangePage(docs.nextPage)}
                >
                    {docs.nextPage}
                </p>
            }
        </div>
    );
};

export default Pager;