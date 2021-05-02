import React from 'react'; 
import './collections-overview.styles.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsArray} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) =>
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            }
        </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray,
})

export default connect(mapStateToProps)(CollectionOverview)
