import React, {Component} from 'react';
import Rating from 'react-star-rating-component';

class UserApps extends Component {

  constructor(props){
    super(props);
    this.state = {
      apps: []
    }
  }

  componentWillMount(){
    this.props.db.ref(`accounts/${this.props.accountID}`).on('value', (snapshot) => {
      console.log(snapshot.val(), `accounts/${this.props.accountID}`, this.props)
      this.setState({apps: snapshot.val().apps})

    });
  }

  formatApps(){
    const apps = Object.values(this.state.apps).map((app, index) => {
      return(
        <li key={index}>{app.title}
        <Rating
        name="rate1" 
        starCount={5}
        value={1}
        />
        </li>
        )
    })
    return apps;
  }

  render(){
    return(
      <section id="apps">
      <h4>Current Apps</h4>
      <ul>
      {this.formatApps()}
      </ul>
      </section>
      )
  }
}

export default UserApps;