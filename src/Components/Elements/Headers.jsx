const HeadersElement = (element) => {


    return(
        <>
                       {
                        element.contents.map((e, k)=>{
                            return(<div className='my-8'>
                            <h1 className='text-4xl font-bold my-4'>{k+1}.{e.title}</h1>
                             <h1 className='text-xl'>{e.content}</h1>
                            </div>)
                        })
                       }
                    </>

    )
}

export default HeadersElement