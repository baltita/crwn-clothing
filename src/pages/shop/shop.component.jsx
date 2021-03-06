import React, {Component} from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    };

    unSubscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot)
                updateCollections(collectionsMap);
                this.setState({loading: false})
            }
        )

        // Same logic as above, but with onSnapshot
        // this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapShot)
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false})
        // })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);