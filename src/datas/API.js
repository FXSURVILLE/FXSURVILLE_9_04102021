
const client = "12"


export function clientID() {
  return client;
}

export function fetchActivity() {fetch('http://localhost:3000/user/'+client+'/activity')
.then(response => response.json())
.then(activity => this.setState({activities: activity?.data.sessions}))}
