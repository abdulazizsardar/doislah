import HeadersElement from "../Components/Elements/Headers";
import ListElement from "../Components/Elements/List";
import ParagraphElement from "../Components/Elements/Paragraph";

const PostRender = (element) => {

    switch(element.type){

            case 'headers':
            return(HeadersElement(element))
            case 'paragraph':
            return(ParagraphElement(element))
            case 'list':
            return(ListElement)

    }

}

export default PostRender