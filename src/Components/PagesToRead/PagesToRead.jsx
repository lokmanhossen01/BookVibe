const PagesToRead = ({data}) => {
    return(
        <div>
            <div className="chart">
                {data.map((book, index) => (
                    <div key={index} className="bar" style={{ height: `${book.totalPages}px` }}>
                    <span className="bar-text">{`${book.name} (${book.totalPages} pages)`}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PagesToRead;