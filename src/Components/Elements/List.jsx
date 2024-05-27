const ListElement = (e) => {
    return(
        <>
        {
            e.content.map((e,k )=>{
                return(
                    <>
                    <div class="doislah-blog-list mt-4">
            <div class="quote-number">
                {k+1}
            </div>
            <div class="quote-content">
                <p>{e}</p>
            </div>
        </div>
                    </>
                )
            })
        }
        </>
    )

}

export default ListElement;