'use strict';

const e = React.createElement;

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };

  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/applwgQ44Q6jkKwoX/Favorites?api_key=keyns5wEwpB9zhjzQ')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: data.records });
    }).catch(err => {
      // Error
    });
  }

  render() {
    return (

"Hello"
    );
  }
}

export default App;

const EventCard = ({ title, year, description, imageURL }) => (
  <div className="card">
    <img className="card-img-top" src={imageURL[0].url} alt="Movie poster" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">
        <small className="text-muted">{year}</small>
      </p>
    </div>
  </div>
);

const domContainer = document.querySelector('#event_cards_container');
ReactDOM.render(e(EventCard), domContainer);
