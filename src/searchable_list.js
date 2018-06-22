import React from 'react';

class SearchableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      archivedItems: []
    };
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }


  
  render() {
    const { list } = this.props;
    const { query, archivedItems } = this.state;
    const filteredList = list
      .filter(byQuery(query));

    return (
      <div>
        <Search
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <List
          list={filteredList}
          onArchive={this.onArchive}
        />
      </div>
    );
  }
}

function byQuery(query) {
  return function(item) {
    return !query ||
    item.name.toLowerCase().includes(query.toLowerCase());
  }
}

function byArchived(archivedItems) {
  return function(item) {
    return !archivedItems.includes(item.id);
  }
}

function Search({ query, onChange, children }) {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={onChange}/>
    </div>
  );
}


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedItems: []
    };
    this.onArchive = this.onArchive.bind(this);
  }
  
  onArchive(id) {
    const { archivedItems } = this.state;
    this.setState({
      archivedItems: [...archivedItems, id]
    });
  }

  render() {
    const { list } = this.props;
    const { archivedItems } = this.state;
    const filteredList = list
      .filter(byArchived(archivedItems));
    return (
      <ul>
        {filteredList.map(item =>
          <li key={item.id}>
            <span>
              {item.name}
            </span>
            <span>
              <button
                type="button"
                onClick={() => this.onArchive(item.id)}>
                Archive
              </button>
            </span>
          </li>
        )}
      </ul>
    );
  }
}

export default SearchableList