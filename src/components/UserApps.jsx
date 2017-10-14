import React, {Component} from 'react';

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

  render(){
    return(
      <section id="apps">
      
      </section>
      )
  }
}

export default UserApps;