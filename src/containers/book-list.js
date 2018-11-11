import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">{book.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
                
            </div>

        );
    }
}

function mapStateToProps(state) {
    // Whatever returned from here will shop up as props inside of BookList
    return {
        books: state.books,
        activeBook: state.activeBook
    };
}

// Anything returned from this function will
// return as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result
    // should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList form a component to a container.
// It needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

