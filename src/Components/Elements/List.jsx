const ListElement = (e) => {
    return(
        <div class="doislah-blog-list">
            <div class="quote-number">
                {e.number}
            </div>
            <div class="quote-content">
                <p>{e.description}</p>
            </div>
        </div>
    )

}

export default ListElement;