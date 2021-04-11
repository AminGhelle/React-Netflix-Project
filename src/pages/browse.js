import {UseContent} from '../hooks'
import {BrowseContainer}  from '../containers/browse'
import SelectionFilter from '../utils/selection-filter';

function Browse() {
 const { series } = UseContent('series')
 const { films } = UseContent('films')
 const   slides  = SelectionFilter({ series, films })
 console.log(slides)

 return (
     <BrowseContainer slides={slides}/>
 )

}
 
export default Browse
