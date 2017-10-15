import React, {Component} from 'react';
import Rating from 'react-star-rating-component';

class UserApps extends Component {

  constructor(props){
    super(props);
    this.state = {
      apps: []
    }
  }

  setRating(appKey, rating) {
    this.props.db.ref(`accounts/${this.props.accountID}/apps/${appKey}`).update({
      rating: rating
    });
  }

  componentWillMount(){
    this.props.db.ref(`accounts/${this.props.accountID}`).on('value', (snapshot) => {
      console.log(snapshot.val(), `accounts/${this.props.accountID}`, this.props)
      this.setState({apps: snapshot.val().apps})
    });
  }


  onStarClick(nextValue, prevValue, name){
      this.setRating(name, nextValue)
  }

  formatApps(){
    const apps = Object.keys(this.state.apps).map((appKey, index) => {
      return(
        <li key={index}>{this.state.apps[appKey].title}
        <Rating
        id="rating"
        name={appKey}
        onStarClick={this.onStarClick.bind(this)}
        starCount={5}
        value={this.state.apps[appKey].rating}
        />
        </li>
        )
    })
    return apps;
  }

  render(){
    return(
      <section id="apps">
      <ul>
      {this.formatApps()}
      </ul>
      </section>
      )
  }
}

export default UserApps;